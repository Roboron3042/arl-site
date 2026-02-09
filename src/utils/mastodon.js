function renderEmojis(content, emojis) {
  if (!emojis || emojis.length === 0) return content;
  
  let result = content;
  
  emojis.forEach(emoji => {
    const regex = new RegExp(`:${emoji.shortcode}:`, 'g');
    const img = `<img 
      src="${emoji.url}" 
      alt=":${emoji.shortcode}:" 
      title=":${emoji.shortcode}:" 
      class="max-w-4 max-h-4 inline-block"
      loading="lazy"
    />`;
    result = result.replace(regex, img);
  });
  
  return result;
}

export async function getMastodonComments(statusId, instanceUrl) {
  try {
    const response = await fetch(`${instanceUrl}/api/v1/statuses/${statusId}/context`);
    const data = await response.json();

    const findParents = (comment) => {
      const parent = data.descendants.find((c) => c.id === comment.in_reply_to_id);
      if (parent) return 1 + findParents(parent);
      return 0;
    };

    const comments = data.descendants.map((comment) => ({
      ...comment,
      content: renderEmojis(comment.content, comment.emojis),
      indent: findParents(comment),
      account: { ...comment.account, display_name: renderEmojis(comment.account.display_name, comment.account.emojis)},
    }));

    return comments;
  } catch (error) {
    console.error('Failed to fetch Mastodon comments:', error);
    return [];
  }
}

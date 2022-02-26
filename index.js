const Application = require('@waline/vercel');

module.exports = Application({
  mailSubject: '{{parent.nick}}，您在博客「{{site.name}}」上的评论收到了回复',
  mailTemplate: `
    <div style="border-top:2px solid #12ADDB;box-shadow:0 1px 3px #AAAAAA;line-height:180%;padding:0 15px 12px;margin:50px auto;font-size:12px;">
      <h2 style="border-bottom:1px solid #DDD;font-size:14px;font-weight:normal;padding:13px 0 10px 8px;">        
        您在博客<a style="text-decoration:none;color: #12ADDB;" href="{{site.url}}" target="_blank">{{site.name}}</a>上的评论有了新的回复
      </h2>
      <div style="padding:0 12px 0 12px;margin-top:18px">
		<p>{{parent.nick}}，您曾发表评论：</p>
        <div style="background-color: #f5f5f5;padding: 10px 15px;margin:18px 0;word-wrap:break-word;">{{parent.comment | safe}}</div>
        <p><strong>{{self.nick}}</strong> 回复说：</p>
        <div style="background-color: #f5f5f5;padding: 10px 15px;margin:18px 0;word-wrap:break-word;">{{self.comment | safe}}</div>
        <p>您可以点击<a style="text-decoration:none; color:#12addb" href="{{site.postUrl}}" target="_blank">前往原文查看完整的回复內容</a>，欢迎再次光临<a style="text-decoration:none; color:#12addb" href="{{site.url}}" target="_blank">{{site.name}}</a>。</p>
        <br/>
      </div>
	  <div style="border-top:1px solid #DDD; padding:13px 0 0 8px;">
		该邮件为系统自动发送的邮件，请勿直接回复。
	  </div>
	  <br/>
    </div>`,
  mailSubjectAdmin: '您的博客「{{site.name}}」收到了新评论',
  mailTemplateAdmin: `
    <div style="border-top:2px solid #12ADDB;box-shadow:0 1px 3px #AAAAAA;line-height:180%;padding:0 15px 12px;margin:50px auto;font-size:12px;">
      <h2 style="border-bottom:1px solid #DDD;font-size:14px;font-weight:normal;padding:13px 0 10px 8px;">        
        有人在<a style="text-decoration:none;color: #12ADDB;" href="{{site.url}}" target="_blank">{{site.name}}</a>发表了新的评论
      </h2>
      <div style="padding:0 12px 0 12px;margin-top:18px">
		<p><strong>{{self.nick}}</strong> 评论说：</p>
		<div style="background-color: #f5f5f5;padding: 10px 15px;margin:18px 0;word-wrap:break-word;">{{self.comment | safe}}</div>
        <p>您可以点击<a style="text-decoration:none; color:#12addb" href="{{site.postUrl}}" target="_blank">前往原文查看完整的评论内容。</a></p>
        <br/>
      </div>
	  <div style="border-top:1px solid #DDD; padding:13px 0 0 8px;">
		该邮件为系统自动发送的邮件，请勿直接回复。
	  </div>
	  <br/>
    </div>`
});

const waline = require('@waline/vercel');

module.exports = waline({
	forbiddenWords: [
	    '习近平',
	    '毛泽东',
	    '快递',
	    '空包',
	    '代发',
	    '单号'
  	],
	disallowIPList: [
	    '220.173.125.83',
	    '222.83.150.92'
  	],
  	secureDomains: [
	    'qianyan98.github.io',
	    'makiru.top',
	    'blog-waline-ypia.vercel.app'
		
  	],
	mailSubject: '{{parent.nick}}，您在博客『{{site.name}}』上的评论，收到了来自{{self.nick}}回复 📨',
	mailSubjectAdmin: '您的博客『{{site.name}}』收到了来自{{self.nick}}的新评论 🕊',
	mailTemplate: '<div style="border-radius: 10px 10px 10px 10px;font-size:13px;    color: #555555;width: 666px;font-family:'Century Gothic','Trebuchet MS','Hiragino Sans GB',微软雅黑,'Microsoft Yahei',Tahoma,Helvetica,Arial,'SimSun',sans-serif;margin:50px auto;border:1px solid #eee;max-width:100%;background: #ffffff repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);">     <div style="width:100%;background:#49BDAD;color:#ffffff;border-radius: 10px 10px 0 0;background-image: -moz-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));background-image: -webkit-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));height: 66px;">         <p style="font-size:15px;word-break:break-all;padding: 23px 32px;margin:0;background-color: hsla(0,0%,100%,.4);border-radius: 10px 10px 0 0;">您在<a style="text-decoration:none;color: #ffffff;" href="${SITE_URL}"> ${SITE_NAME}</a>上的留言有新回复啦！</p>     </div>     <div style="margin:40px auto;width:90%">         <p>${PARENT_NICK} 同学，您曾在文章上发表评论：</p>         <div style="background: #fafafa repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);margin:20px 0px;padding:15px;border-radius:5px;font-size:14px;color:#555555;">${PARENT_COMMENT}</div>         <p>${NICK} 给您的回复如下：</p>         <div style="background: #fafafa repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);margin:20px 0px;padding:15px;border-radius:5px;font-size:14px;color:#555555;">${COMMENT}</div>         <p>您可以点击<a style="text-decoration:none; color:#12addb" href="${POST_URL}#comments">查看回复的完整內容</a>，欢迎再次光临<a style="text-decoration:none; color:#12addb" href="${SITE_URL}"> ${SITE_NAME}</a>。</p>         <style type="text/css">             a:link {                 text-decoration: none             }              a:visited {                 text-decoration: none             }              a:hover {                 text-decoration: none             }              a:active {                 text-decoration: none             }         </style>     </div> </div>',
	mailTemplateAdmin: '<div style="border-radius: 10px 10px 10px 10px;font-size:13px;    color: #555555;width: 666px;font-family:'Century Gothic','Trebuchet MS','Hiragino Sans GB',微软雅黑,'Microsoft Yahei',Tahoma,Helvetica,Arial,'SimSun',sans-serif;margin:50px auto;border:1px solid #eee;max-width:100%;background: #ffffff repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);">     <div style="width:100%;background:#49BDAD;color:#ffffff;border-radius: 10px 10px 0 0;background-image: -moz-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));background-image: -webkit-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));height: 66px;">         <p style="font-size:15px;word-break:break-all;padding: 23px 32px;margin:0;background-color: hsla(0,0%,100%,.4);border-radius: 10px 10px 0 0;">您在<a style="text-decoration:none;color: #ffffff;" href="${SITE_URL}"> ${SITE_NAME}</a>上的文章有新留言啦！</p>     </div>     <div style="margin:40px auto;width:90%">         <p>${NICK} 给您的留言如下：</p>         <div style="background: #fafafa repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);margin:20px 0px;padding:15px;border-radius:5px;font-size:14px;color:#555555;">${COMMENT}</div>         <p>您可以点击<a style="text-decoration:none; color:#12addb" href="${POST_URL}#comments">查看回复的完整內容</a>。</p>     </div> </div>'
});

/*
 * RKBLOCK : Block Rainbow-knight's messages on
 * the website mlpfictions.com
 * 
 * By Peshou, votre cher et tendre
 */



var comments = [];
var comment;
var message;
var pseudo;

var user = /rainbowknight/i;

var rkMessages = [];

var i;

window.onload = main;

function main()
{
	console.log("RKBLOCK is running on this page.");

	comments = document.getElementsByClassName('commentBloc');
	if (comments.length > 0)
	{
		for (i = 0 ; i < comments.length ; i++)
		{
			comment = comments[i];
			message = comment.getElementsByClassName('comment shadow');

			if (message.length > 0)
			{
				message = message[0];
				pseudo = message.getElementsByTagName('a');

				if (pseudo.length > 0)
				{
					pseudo = pseudo[0];
					if (pseudo.href.match(user) != null)
					{
						console.log(comments[i]);
					}
				}
			}
		}
	}
}
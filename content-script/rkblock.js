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

// Edit this Regex to change the user to block.
var user = /rainbowknight/i;

var rkMessages = [];

var i;

window.onload = main;

function main()
{
	console.log("RKBLOCK is running on this page.");
	
// Delete on fanfic comments
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
						rkMessages.push(comment);
					}
				}
			}
		}
	}	

// Delete on profil comments
	comments = document.getElementsByClassName('profilComment');
	if (comments.length > 0)
	{
		for (i = 0 ; i < comments.length ; i++)
		{
			comment = comments[i];
			pseudo = comment.getElementsByTagName('a');

			if (pseudo.length > 0)
			{
				pseudo = pseudo[0];
				if (pseudo.href.match(user) != null)
				{
					rkMessages.push(comment);
				}
			}
		}
	}

	for (i = 0 ; i < rkMessages.length ; i++)
	{
		rkMessages[i].parentNode.removeChild(rkMessages[i]);
	}

	rkMessages = [];
}
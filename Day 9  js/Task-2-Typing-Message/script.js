let showButton = document.getElementById("showButton");


showButton.onclick = function () {

    let newPage = window.open(
        "",
        "_blank",
        "width=700,height=500"
    );


    let myMessage = `
Hello Ahmed!

Welcome to my website.

This is a simple JavaScript typing effect.

The text is being written character by character,
just like someone is typing it in front of you.

You can use this idea to create:

- Messages
- Stories
- Welcome screens
- Notifications
- Simple animations

JavaScript can control the page,
change the HTML,
change the CSS,
and create interactive effects.

Thank you for visiting my website!
`;


    newPage.document.write(`

        <html>

        <head>

            <title>Message</title>

            <style>

                body {
                    background-color: #222;
                    color: white;
                    font-family: Arial;
                    padding: 50px;
                    font-size: 22px;
                    line-height: 1.8;
                }

                #text {
                    white-space: pre-line;
                }

            </style>

        </head>

        <body>

            <div id="text"></div>

        </body>

        </html>

    `);


    newPage.document.close();


    let text = newPage.document.getElementById("text");

    let i = 0;


    let typing = setInterval(function () {

        text.innerHTML += myMessage[i];

        i++;


        if (i >= myMessage.length) {

            clearInterval(typing);


            setTimeout(function () {

                newPage.close();

            }, 3000);

        }

    }, 50);

};
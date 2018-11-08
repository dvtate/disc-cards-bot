"use strict";


// Import the discord.js module
global.Discord = require("discord.js");

// Create an instance of a Discord client
global.client = new global.Discord.Client();


global.client.on("ready", msg => {
    console.log("rdy");
});
// message event listener
global.client.on("message", async msg => {

    if (msg.content.match(/-new/)) {
        
    } else if (msg.content.match(/-join/)) {

    } else if (msg.content.match(/-start/)) {

    } else if (msg.content.match(/-stop/)) {

    } else if (msg.content.match(/-test/)) {

        msg.channel.send("test").then(m => {
            console.log("kappa");
            let reacts = new Discord.ReactionCollector(m, () => true, {time: 15000});
            reacts.on("end", c => console.log(c.size));
            reacts.on("collect", (r, c) => {
                console.log(c.size);
            });
        });
    }
});

// something broke
global.client.on("error", async e => {
	console.error("Client Error:", e);
});

const token = require("fs").readFileSync(`${process.env.HOME}/.corki/disc_key`).toString().trim();

// Log bot in using token
global.client.login(token);

client.on("messageCreate", async (message) => {
	if (message.author.bot) return false;
	if (message.content.includes("What is R1-181?")) {
		message.reply("R1-181 is a discord bot made for the 181st Armoured Division by CT Frost-CT3838");
	}
});

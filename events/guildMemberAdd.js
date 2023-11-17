const { Events } = require('discord.js');

module.exports = {
	name: Events.GuildMemberAdd,
	async execute(member) {

		try {
            const role = member.guild.roles.cache.get("1174287824359542784");
            if (role) {
              await member.roles.add(role);
              console.log(`Added role ${role.name} to ${member.user.tag}`);
            } else {
              console.log('Role not found');
            }
          } catch (err) {
            console.error('Error assigning role:', err);
          }
	},
};

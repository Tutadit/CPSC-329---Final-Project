export const MUMBO_JUMBO = [	
	'I have been instructed by his highness to contact you regarding a ',
	'very serious manner.',
	'Sir Gigi has it on good authority that you are to be trusted. ',
	'He is in desperate need of your assistance. ',
	'You see, Sir Gigi, praise be his kind heart, is the creator ',
	'of the “Save The Children” relief fund. ',
	'This fund has helped numerous children in need of saving. ',
	'Mr. Blob, we are dollars away from reaching our goal of $2,000,000 ',
	'raised for those poor children, oh bless them be, oh Mr. Blob today ',
	'You are going to save lives! ',
	'All we ask from you is a small donation of $400, it is a very small ',
	'price to pay, for such an enormous gift.',
	'I can take your credit card info right away.'
].join(" ")

export default {
	spammer: 'Hello. Is this Mr. Blob?',
	responses: [
		{
			blob: 'Who is this?',
			spammer: ['This is Thomas McKinnings.',
				'I represent Sir Fally Gigi, heir to the Gigi fortune.',
				'May I speak with Mr. Blob?'].join(" "),
			responses: [
				{
					blob: 'Yes, that is me!',
					spammer: 'Wonderful! Hello Mr. Blob, this is Thomas McKinnings, ' + MUMBO_JUMBO,
					responses: [
						{
							blob: ['Oh how marvelous a thing you are doing!',
								'Let me grab my card so I can send you that',
								'money right away!'].join(" "),
							spammer: 'Gotcha!',
							scammed: true
						}
					]
				}
			]

		},
		{
			blob: 'Yes, speaking!',
			spammer: 'Hello Mr. Blob, this is Thomas McKinnings, I represent Sir Fally Gigi, heir to the Gigi fortune. ' + MUMBO_JUMBO,
			responses: [
				{
					blob: ['Oh how marvelous a thing you are doing!',
						'Let me grab my card so I can send you that',
						'money right away!'].join(" "),
					spammer: 'Gotcha!',
					scammed: true
				}
			]
		}
	],
}
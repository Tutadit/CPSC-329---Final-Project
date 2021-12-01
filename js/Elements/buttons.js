// Heirarchical representation of our button elements
//  as JQeury objects.
export default {
	restart:$(".restart"),
	cont:$(".continue"),
	title_page: $("#title-page"),
	title: {
		start: $("#start"),
		tutorial:$("#go_tutorial"),
    citations:$("#go_citationss")
	},
	home: {
		messages: $("#messages"),
		phone: $("#phone"),
		email: $("#email"),
		mocha: $("#mocha")
	},
	mocha: {
		home: $("#back-to-home-mocha")
	},
	text: {
		home: {
			spam: $("#spam-text"),
			toHome: $("#text-home-to-home")
		},
		spam: {
			remove: $("#delete-spam-text"),
			link: $("#link-spam-text"),
			toTextHome: $("#back-to-text-home")
		}
	},
	phone: {
		home: {
			accept: $("#accept"),
			reject: $("#reject")
		},
		call: {
			end: $("#hang-up")
		}
	},
	email: {
		home: {
			spam: $("#spam-email"),
			real: $("#real-email"),
			toHome: $("#email-home-to-home")
		},
		real: {
			remove: $("#ignore-real-email"),
			link: $("#link-real-email"),
			toEmailHome: $("#back-to-email-home-from-real")
		},
		spam: {
			remove: $("#ignore-spam-email"),
			link: $("#link-spam-email"),
			toEmailHome: $("#back-to-email-home")
		}
	}
}
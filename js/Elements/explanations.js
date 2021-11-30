export default {
	all: $(".info-wrapper"),
	text: {
		gameover: $("#text-fail"), // Text fail explaination 
		success: $("#text-pass"), // Text pass explaination
	},
	email: {
		real: {
			gameover: $("#emailreal-fail"), // Email real fail explaination 
			success: $("#emailreal-pass"), // Email real pass explaination
		},
		spam: {
			gameover: $("#emailscam-fail"), // Email scam fail explaination 
			success: $("#emailscam-pass"), // Email scam pass explaination
		}
	},
  phone:{
    gameover: $("#phone-fail"), // Phone scam fail explaination 
    success: $("#phone-pass"), // Phone scam pass explaination 
  },
}
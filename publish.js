let fonts = {
	Roboto: {
		normal: 'fonts/Roboto-Regular.ttf',
		bold: 'fonts/Roboto-Medium.ttf',
		italics: 'fonts/Roboto-Italic.ttf',
		bolditalics: 'fonts/Roboto-MediumItalic.ttf'
	}
};

let PdfPrinter = require('pdfmake');
let printer = new PdfPrinter(fonts);
let fs = require('fs');

let page_width = 147;

let margin = 0.5;
let margin_left = margin;
let margin_right = margin;
let margin_top = margin;
let margin_bottom = margin;

let width_with_margin = page_width + margin_left + margin_right;

let docDefinition = {
  // a string 'A8' or { width: number, height: number }
  pageSize: { width: width_with_margin, height: "auto" },

  // by default we use portrait, you can change it to landscape if you wish
  // pageOrientation: 'landscape',

  // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
  pageMargins: [ margin_left, margin_right, margin_top, margin_bottom ],    
content: [
		{ 
			text: '12 Life Lessons from a Man Who’s Seen 12000 Deaths\n', 
			style: 'header',
		},		
		{ 
			text: '\nWhat Can We Learn from the Dying?\n', 
			style: 'subheader' 
		},
		'Rooted in the hearts of many Hindus is the belief that if you breathe your last in Kashi (Varanasi) you attain what is popularly known as ‘Kashi Labh’ or ‘the fruit of Kashi’— moksh or “release from the cycle of rebirth impelled by the law of karma”.\n\n',
		'Kashi Labh Mukti Bhawan in Varanasi is one of the three guesthouses in the city where people check in to die. The other two are Mumukshu Bhawan and Ganga Labh Bhawan. Established in 1908, Mukti Bhawan is well-known within the city and outside.\n\n',
		'Bhairav Nath Shukla has been the Manager of Mukti Bhawan for 44 years. He has seen the rich and the poor take refuge in the guesthouse in their final days as they await death and hope to find peace. Shukla hopes with and for them. He sits on the wooden bench in the courtyard, against the red brick wall and shares with me 12 recurring life lessons from the 12000 deaths he has witnessed in his experience as the manager of Mukti Bhawan:\n\n',
		{
			image: 'assets/check-in-to-die.jpg',
			width: page_width
		},	
		{ text: 'People check in to die.\n\n', italics: true},
		{ 
			text: '1. Resolve all conflicts before you go\n\n', 
			style: 'subheader' 
		},
		'Shukla recounts the story of Shri Ram Sagar Mishr, a Sanskrit scholar of his times. Mishr was the eldest of six brothers and was closest to the youngest one. Years ago an ugly argument between the two brothers led to a wall to partition the house.\n\n',
		'In his final days, Mishr walked to the guesthouse carrying his little paan case and asked to keep room no. 3 reserved for him. He was sure he will pass away on the 16th day from his arrival. On the 14th day he said, “Ask my estranged brother of 40 years to come see me. This bitterness makes my heart heavy. I am anxious to resolve every conflict.”\n\n',
		'A letter was sent out. On the 16th day when the youngest brother arrived, Mishr held his hand and asked to bring down the wall dividing the house. He asked his brother for forgiveness. Both brothers wept and mid sentence, Mishr stopped speaking. His face became calm. He was gone in a moment.\n\n',
		'Shukla has seen this story replay in many forms over the years. “People carry so much baggage, unnecessarily, all through their life only wanting to drop it at the very end of their journey. The trick lies not in not having conflicts but in resolving them as soon as one can,” says Shukla.\n\n',
		{
			image: 'assets/07.jpg',
			width: page_width
		},	
		{ text: 'The trick lies not in not having conflicts but in resolving them as soon as one can.\n\n', italics: true},		
		{ 
			text: '2. Simplicity is the truth of life\n\n', 
			style: 'subheader' 
		},		
		'“People stop eating indulgent food when they know they are going to go. The understanding that dawns on many people in their final days is that they should’ve lived a simple life. They regret that the most,” says Shukla.\n\n',
		'A simple life, as he explains, can be attained by spending less. We spend more to accumulate more and thus create more need. To find contentment in less is the secret to having more.\n\n',
		{
			image: 'assets/India-happy-kids.jpg',
			width: page_width
		},	
		{ text: 'To find contentment in less is the secret to having more.\n\n', italics: true},		
		{ 
			text: '3. Filter out people’s bad traits\n\n', 
			style: 'subheader' 
		},		
		'Shukla maintains that every person has shades of good and bad. But instead of dismissing “bad” people outrightly, we must seek out their good qualities. Harbouring bitterness for certain people comes from concentrating on their negatives. If you focus on the good qualities though, you spend that time getting to know them better or, maybe even, loving them.\n\n',
		{ 
			text: '4. Be willing to seek help from others\n\n', 
			style: 'subheader' 
		},
		'To know and do everything by yourself might feel empowering but it limits one from absorbing what others have learnt. Shukla believes we must help others, but more importantly, have the courage to seek help when we’re in need.\n\n',
		'Every person in the world knows more than us in some respect. And their knowledge can help us, only if we’re open to it.\n\n',
		'He recounts the incident of an old woman being admitted on a rainy day back in the 80s. The people who got her there left her without filling the inquiry form. A few hours later, the police came to trace the relatives of the old lady who, they said, were runaway Naxalites. Shukla pretended to know nothing. The police left. When the lady’s relatives returned next morning, Shukla asked the leader uninhibitedly, “When you can kill 5-8 people yourself why didn’t you simply shoot your Nani and cremate her yourself? Why did you make me lie and feel ashamed?” The grandson fell to his knees and pleaded for forgiveness saying no one amongst them is capable of helping his religious grandmother attain salvation. He respects that, and is the reason why he brought her to Mukti Bhawan.\n\n',
		{ 
			text: '5. Find beauty in simple things\n\n', 
			style: 'subheader' 
		},
		'Mukti Bhavan plays soulful bhajans and devotional songs three times a day. “Some people”, he says, “stop and admire a note or the sound of the instruments as if they have never heard it before, even if they have. They pause to appreciate it and find beauty in it.”\n\n',
		'But that’s not true of everyone, he adds. People who are too critical or too proud, are the ones who find it hard to find joy in small things because their minds are preoccupied with “seemingly” more important things.\n\n',
		{
			image: 'assets/Music-Man.jpg',
			width: page_width
		},	
		{ text: 'Stop and admire a note or the sound of the instruments.\n\n', italics: true},
		{ 
			text: '6. Acceptance is liberation\n\n', 
			style: 'subheader' 
		},
		'Most people shirk away from accepting what they are going through. This constant denial breeds in them emotions that are highly dangerous. Only once you accept your situation is when you become free to decide what to do about it. Without acceptance you are always in the grey space.\n\n',
		'When you are not in denial of a problem you have the strength to find a solution.\n\n',
		'Indifference, avoidance, and denial of a certain truth, Shukla believes, cause anxiety; they develop a fear of that thing in the person. Instead, accept the situation so you are free to think what you want to do about it and how. Acceptance will liberate you and empower you.\n\n',
		{ 
			text: '7. Accepting everyone as the same makes service easier\n\n', 
			style: 'subheader' 
		},
		'The secret to Shukla’s unfazed dedication and determination towards his demanding job can be understood via this life lesson. He admits that life would’ve been difficult if he treated people who admit themselves to Mukti Bhavan differently, based on their caste, creed, colour, and social or economic status. Categorisation leads to complication and one ends up serving no one well. “The day you treat everyone the same is the day you breathe light and worry less about who might feel offended or not. Make your job easier,” he says.\n\n',
		{
			image: 'assets/prayer.jpg',
			width: page_width
		},	
		{ text: 'Categorisation leads to complication and one ends up serving no one well.\n\n', italics: true},		
		{ 
			text: '8. If/When you find your purpose, do something about it\n\n', 
			style: 'subheader' 
		},		
		'To have awareness about one’s calling is great, but only if you do something about it.\n\n',
		'A lot of people, Shukla says, know their purpose but don’t do anything about realising it, making it come to life. Simply sitting on it is worse than not having a calling in the first place. Having a perspective towards your purpose will help you measure the time and effort you need to dedicate to it, while you’re caught up in what you think you can’t let go or escape. Take action on what truly matters.\n\n',
		{ 
			text: '9. Habits become values\n\n', 
			style: 'subheader' 
		},
		'Shukla recommends cultivating good habits to be able to house good values. And building good habits happens over time, with practice. “It’s like building a muscle; you have to keep at it everyday.”\n\n',
		'Till one doesn’t consistently work towards being just or kind or truthful or honest or compassionate, every single time he is challenged, one cannot expect to have attained that quality.\n\n',
		{ 
			text: '10. Choose what you want to learn\n\n', 
			style: 'subheader' 
		},				
		'In the vastness of the infinite amount of knowledge available to us it is easy to get lost and confused. “The key lesson here is to be mindful of choosing what you deeply feel will be of value to you,” he says. People might impose subjects and philosophies on you because it interests them and while you must acknowledge their suggestions, the wise thing to do is delve deeper into what rejoices your own heart and mind.\n\n',
		'With a smile on his face Shukla says, “In the last days of their life a lot of people can’t speak, walk or communicate with others with as much ease as they could, earlier. So, they turn inwards. And start to remember the things that made their heart sing once, things that they cared to learn more about over the course of their life, which enriches their days now.”\n\n',
		{
			image: 'assets/Old-Guy.jpg',
			width: page_width
		},	
		{ text: 'They start to remember the things that made their heart sing once.\n\n', italics: true},		
		{ 
			text: '11. You don’t break ties with people; you break ties with the thought they produce\n\n', 
			style: 'subheader' 
		},
		'You can seldom distance yourself from people you have truly loved or connected with in some way. However, in any relationship, along the way, certain mismatch of ideologies causes people to stop communicating. This never means you are no longer associated with that person. It simply means that you don’t associate with a dominant thought that person brings with him/her, and to avoid more conflict you move away. The divorce, Shukla affirms, is with the thought and never with the person. To understand that is to unburden yourself from being bitter and revengeful.\n\n',	
		{ 
			text: '12. Ten percent of what you earn should be kept aside for dharma\n\n', 
			style: 'subheader' 
		},
		'Dharma, Shukla doesn’t define as something religious or spiritual. Instead, he says it is associated more with doing good for others and feeling responsible about that. A simple calculation according to him is to keep 10 percent of your income for goodwill.\n\n',
		'Many people donate or do charitable acts towards the end of their life because death is hard on them. In their suffering, they begin to empathise with others’ suffering. He says those who have the companionship of loved ones, the blessings of unknown strangers, and an all-encompassing goodwill of people exit peacefully and gracefully. That is possible when you don’t cling on to everything you have, and leave some part of it for others.\n\n',
		'~ END ~ \n\n',
		'Credits \n\n',
		'Written by Deepak Ramola\n',
		{ text:"http://projectfuel.in/blog/\n\n", link:"http://projectfuel.in/blog/", decoration:"underline" },
		'Mobile optimized PDF by selvan\n',
		{ text:"p.thamarai+12lessons@ gmail.com\n\n", link:"mailto:p.thamarai+12lessons@gmail.com", decoration:"underline" },
		"Source \n",
		{ text:"http://upliftconnect.com/12-life-lessons/\n\n", link:"http://upliftconnect.com/12-life-lessons/", decoration:"underline" },
],
	styles: {
		header: {
			fontSize: 15,
			bold: true
		},
		subheader: {
			fontSize: 13,
			bold: true,
			italics: true

		}
	}
};

let pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('pdfs/12-life-lessons.pdf'));
pdfDoc.end();

console.log("Finished creating PDF");

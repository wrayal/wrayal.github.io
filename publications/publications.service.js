angular.module('newAngularApp')
	.factory('Publications',function(){
		
		publicationList={
			wray2012non:
			{
			  title:"Non-linear waves in electrified viscous film flow down a vertical cylinder",
			  author:"Wray, A. W., Matar, O. K. and Papageorgiou, D. T.",
			  journal:"IMA Journal of Applied Mathematics",
			  volume:"77",
			  number:"3",
			  pages:"430--440",
			  year:2012,
			  publisher:"OUP",
			  link: "https://ieeexplore.ieee.org/abstract/document/8145341"
			},

			wray2013electrified: {
			  title:"Electrified coating flows on vertical fibres: enhancement or suppression of interfacial dynamics",
			  author:"Wray, A. W., Papageorgiou, D. T. and Matar, O. K.",
			  journal:"Journal of Fluid Mechanics",
			  volume:"735",
			  pages:"427--456",
			  year:2013,
			  publisher:"Cambridge University Press",
			  link: "https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/electrified-coating-flows-on-vertical-fibres-enhancement-or-suppression-of-interfacial-dynamics/C00A183359CD0B58B74E8B4FA3DA973F"
			},

			wray2013electrostatically: {
			  title:"Electrostatically controlled large-amplitude, non-axisymmetric waves in thin film flows down a cylinder",
			  author:"Wray, A. W., Papageorgiou, D. T. and Matar, O. K.",
			  journal:"Journal of Fluid Mechanics",
			  volume:"736",
			  year:2013,
			  publisher:"Cambridge University Press",
			  link: "https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/electrostatically-controlled-largeamplitude-nonaxisymmetric-waves-in-thin-film-flows-down-a-cylinder/306A76FCDD8F87E6A60F9D5C562AAA51"
			},

			wray2014electrostatic: {
			  title:"Electrostatic suppression of the “coffee stain effect”",
			  author:"Wray, A. W., Papageorgiou, D. T., Craster, R. V., Sefiane, K. and Matar, O. K.",
			  journal:"Langmuir",
			  volume:"30",
			  number:"20",
			  pages:"5849--5858",
			  year:2014,
			  publisher:"ACS Publications",
			  link: "https://pubs.acs.org/doi/abs/10.1021/la500805d"
			},

			wray2015electrostatic: {
			  title:"Electrostatic suppression of the “coffee-stain effect”",
			  author:"Wray, A. W., Papageorgiou, D. T., Craster, R. V., Sefiane, K. and Matar, O. K.",
			  journal:"Procedia IUTAM",
			  volume:"15",
			  pages:"172--177",
			  year:2015,
			  publisher:"Elsevier",
			  link: "https://www.sciencedirect.com/science/article/pii/S2210983815001352"
			},

			wray2017reduced: {
			  title:"Reduced models for thick liquid layers with inertia on highly curved substrates",
			  author:"Wray, A. W., Papageorgiou, D. T. and Matar, O. K.",
			  journal:"SIAM Journal on Applied Mathematics",
			  volume:"77",
			  number:"3",
			  pages:"881--904",
			  year:2017,
			  publisher:"SIAM",
			  link: "https://epubs.siam.org/doi/abs/10.1137/16M1060686?casa_token=r9-x5F4bL4YAAAAA:sc22MgkHxdOopWlw9Zg5pu8nmjlZ4DJ1Ylu-f5ERFNbnF2aJQG-LzI_XO_WQo3AALDkE4j_F"
			},

			wray2017accurate: {
			  title:"Accurate low-order modeling of electrified falling films at moderate Reynolds number",
			  author:"Wray, A. W., Matar, O. K. and Papageorgiou, D. T.",
			  journal:"Physical Review Fluids",
			  volume:"2",
			  number:"6",
			  pages:"063701",
			  year:2017,
			  publisher:"APS",
			  link: "https://journals.aps.org/prfluids/abstract/10.1103/PhysRevFluids.2.063701"
			},

			saenz2017dynamics: {
			  title:"Dynamics and universal scaling law in geometrically-controlled sessile drop evaporation",
			  author:"Sáenz, P. J., Wray, A. W., Che, Z., Matar, O. K., Valluri, P., Kim, J. and Sefiane, K.",
			  journal:"Nature communications",
			  volume:"8",
			  pages:"14783",
			  year:2017,
			  publisher:"Nature Publishing Group",
			  link: "https://www.nature.com/articles/ncomms14783"
			}
		}

		talkList={
			APSDFD2018: {
				conferenceName: "American Physical Society, 71st Division of Fluid Dynamics Meeting.",
				year: 2018,
				talks: [
					"Motion of drops on highly hydrophobic surfaces",
					"Low-order modelling of inertial instabilities in thick film flows",
					"Evaporation of multiple drops"
				],
				location: "Atlanta, Georgia, USA"
			},
			APSDFD2017: {
				conferenceName: "American Physical Society, 70th Division of Fluid Dynamics Meeting.",
				year: 2017,
				talks: [
					"Low-order modelling of a drop on a highly-hydrophobic substrate: statics and dynamics",
					"Modelling of hydrothermal instabilities in a capillary bridge "
				],
				location: "Denver, Colorado, USA"
			},
			BIFD2017: {
				conferenceName: "The 7th International Symposium in Bifurcations and Instabilities in Fluid Dynamics",
				year: 2017,
				talks: [
					"Electrostatic Control of the Evaporation of Nanoparticle-laden Drops"
				],
				location: "The Woodlands, Texas, USA"
			},
			BAMC2017: {
				conferenceName: "2017 British Applied Mathematics Colloquium.",
				year: 2017,
				talks: [
					"Low-order modelling of evaporation in asymmetric drops"
				],
				location: "Surrey, UK"
			},
			APSDFD2016: {
				conferenceName: "American Physical Society, 69th Division of Fluid Dynamics Meeting.",
				year: 2016,
				talks: [
					"Low-order models of the motion of sessile droplets on highly hydrophobic surfaces",
					"Doubly-excited pulse-waves on flowing liquid films: experiments and numerical simulations",
					"Three-dimensional modelling of thin liquid films over spinning disks",
					"Three-dimensional simulations of thin ferro-fluid films and drops in magnetic fields",
					"Singularities of the charge transport equation"
				],
				location: "Portland, Oregon, USA"
			},
			EPIC2016: {
				conferenceName: "Enabling Process Innovation through Computation.",
				year: 2016,
				talks: [
					"Low-order modelling of thick films on highy curved substrates"
				],
				location: "Banff, Alberta, Canada"
			},
			APSDFD2015: {
				conferenceName: "American Physical Society, 68th Division of Fluid Dynamics Meeting.",
				year: 2015,
				talks: [
					"Low order modelling of drops on hydrophobic surfaces",
					"Low Order Modelling of films over arbitrary, highly curved substrates",
					"Viscous ferrofluid films under the effects of magnetic fields"
				],
				location: "Boston, Massachusetts, USA"
			},
			IUTAM2014: {
				conferenceName: "IUTAM Symposium on Multiphase Flows with Phase Change: Challenges and Opportunities",
				year: 2014,
				talks: [
					"Electrostatic suppression of the \"coffee-stain effect\""
				],
				location: "Hyderabad, India"
			},
			APSDFD2014: {
				conferenceName: "American Physical Society, 67th Division of Fluid Dynamics Meeting.",
				year: 2014,
				talks: [
					"Electrified film flows at moderate Reynolds number",
					"Modelling of film flows over spinning disks"
				],
				location: "San Francisco, California, USA"
			},
			SIAMNW14: {
				conferenceName: "SIAM Conference on Nonlinear Waves and Coherent Structures",
				year: 2014,
				talks: [
					"Thin film flows over spinning discs: numerical simulation of three-dimensional waves"
				],
				location: "Cambridge, UK"
			},
			APSDFD2013: {
				conferenceName: "American Physical Society, 66th Division of Fluid Dynamics Meeting.",
				year: 2013,
				talks: [
					"Electrostatic control of flows of moderate Reynolds number",
					"Electrostatic control of the coffee stain effect",
					"Dynamics of a thin ferrofluid film subjected to a magnetic field"
				],
				location: "Pittsburgh, Pennsylvania, USA"
			},
			SIAMMS2013: {
				conferenceName: "SIAM Conference on Mathematical Aspects of Material Science.",
				year: 2013,
				talks: [
					"Electrostatically induced singular dynamics in long-wave annular film flows"
				],
				location: "Philadelphia, Pennsylvania, USA"
			},
			BAMC2013: {
				conferenceName: "2013 British Applied Mathematics Colloquium.",
				year: 2013,
				talks: [
					"Electrostatic control of interfacial dynamics"
				],
				location: "Leeds, UK"
			},
			APSDFD2012: {
				conferenceName: "American Physical Society, 65th Division of Fluid Dynamics Meeting.",
				year: 2012,
				talks: [
					"Electrostatically induced long-wave dynamics in moderately conducting annular flows",
					"The dynamics of drops coating the underside of a flexible wall",
					"Control of complex dynamics in highly conducting thin annular films"
				],
				location: "San Diego, California, USA"
			},
			eccomas2012: {
				conferenceName: "6th European Congress on Computational Methods in Applied Sciences and Engineering",
				year: 2012,
				talks: [
					"Electrostatic fibre flow"
				],
				location: "Vienna, Austria"
			},
			BAMC2012: {
				conferenceName: "2012 British Applied Mathematics Colloquium.",
				year: 2012,
				talks: [
					"Electrostatically-induced complex dynamics in viscous film flow down the surface of a cylinder"
				],
				location: "London, UK"
			},
			APSDFD2011: {
				conferenceName: "American Physical Society, 64th Division of Fluid Dynamics Meeting.",
				year: 2011,
				talks: [
					"Electrostatically-induced complex dynamics in viscous liquid film flows down the exterior of a cylinder"
				],
				location: "Baltimore, Maryland, USA"
			},
			IMA2011: {
				conferenceName: "IMA Conference on Nonlinearity and Coherent Structures.",
				year: 2011,
				talks: [
					"Electrostatically‐induced complex dynamics in viscous liquid film flows down the exterior of a cylinder"
				],
				location: "Reading, UK"
			}
		}

		formattedPublication=function(publication) {

			/*
			formPub="";
			formPub+=publication.author+", ";
			formPub+="<i>"+publication.title+"</i>, ";
			formPub+="<b>"+publication.year+"</b>, ";
			formPub+=publication.journal+", ";
			formPub+=publication.volume;
			if (publication.pages) formPub+=", "+publication.pages;
			formPub+=".";
			return formPub;
			*/

			formPub="";
			formPub+="<a href='"+publication.link+"''>";
			formPub+=publication.title+"</a><br>";

			authorSplit=publication.author.split("Wray, A. W.")
			if (authorSplit.length<2) {
				formPub+=publication.author
			} else {
				formPub+=authorSplit[0]+"<b>Wray, A. W.</b>"+authorSplit[1];
			}
			formPub+="<br>"

			formPub+=publication.journal+", ";
			formPub+=publication.volume;
			if (publication.pages) formPub+=", "+publication.pages;
			formPub+=" ("+publication.year+").";
			return formPub;
		}

		formattedTalk=function(talk) {
			formTalk="";
			formTalk+="<b>"+talk.conferenceName+"</b><br>";
			formTalk+="<ul style=\"margin-bottom:0px\">";
			for (i=0; i<talk.talks.length; i++) {
				formTalk+="<li>"+talk.talks[i]+"</li>";
			}
			formTalk+="</ul>";
			formTalk+=talk.location+" ("+talk.year+")";
			return formTalk;
		}

		Publications={
				getAllPublicationsAsArray: function() {
					myArray=[];
					angular.forEach(publicationList,function(publication){
						myArray.push(publication)
					})
					return myArray
				},

				getAllTalksAsArray: function() {
					myArray=[];
					angular.forEach(talkList,function(talkObject){
						myArray.push(talkObject)
					})
					return myArray
				},

				getFormattedPublication: function(whichPublication) {
					return formattedPublication(publicationList[whichPublication])
				},

				formatPublication: function(publicationObject) {
					return formattedPublication(publicationObject)
				},

				formatTalk: function(talkObject) {
					return formattedTalk(talkObject);
				}
            }


		return Publications;
	})
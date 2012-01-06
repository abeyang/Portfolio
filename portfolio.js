$(function() {
    less.env = "development";
    less.watch();
		
	// Collections
		
    var Skillsets = Backbone.Collection.extend({
		// ...
    });
		
	var skillsets = new Skillsets;
	skillsets.add([
		{id:1, title: 'HTML/HTML5', slug: 'html', category: 0},
		{id:2, title: 'CSS/CSS3', slug: 'css', category: 0},
		{id:3, title: '960.gs', slug: '960', category: 0},
		{id:4, title: 'Less+Bootstrap', slug: 'less', category: 0},
		{id:5, title: 'Javascript', slug: 'js', category: 0},
		{id:6, title: 'JQuery', slug: 'jquery', category: 0},
		{id:7, title: 'Backbone', slug: 'backbone', category: 0},
			
		{id:11, title: 'PHP', slug: 'php', category: 1},
		{id:12, title: 'Ruby on Rails', slug: 'ror', category: 1},
		{id:13, title: 'Wordpress', slug: 'wp', category: 1},
			
		{id:21, title: 'Photoshop', slug: 'ps', category: 2},
		{id:22, title: 'Illustrator', slug: 'il', category: 2},
		{id:23, title: 'Omnigraffle', slug: 'om', category: 2},
		{id:24, title: 'Invision', slug: 'iv', category: 2},
			
		{id:31, title: 'Final Cut Pro', slug: 'fcp', category: 3},
		{id:32, title: 'Premiere', slug: 'pr', category: 3},
		{id:33, title: 'After Effects', slug: 'ae', category: 3},
		{id:34, title: 'Maya', slug: 'maya', category: 3},
		{id:35, title: 'Shake', slug: 'shake', category: 3}
	]);
		
	var Project = Backbone.Collection.extend({
		// ...
	});
		
	/* media should be 800 x 450 (max at 800 x 560 w/ no content) */
		
	var webapps = new Project;
	webapps.add([
		{date: '09-2011', company: 'iParadigms', title: 'Turnitin Dashboard',		slug: 'tii-dashboard', 		skills: [1,2,4,5,6,7,21], media: [
			{type: 'image', url: 'http://farm8.staticflickr.com/7166/6638389465_2084d7fab9_o.jpg', 
			content: "**Designed** a dashboard that gives instructors a bird's eye view to see assignments from all their classes. I also **implemented a working prototype** to give us a better idea as to how all the different interactions (on-hover, dropdown, on-click, etc) would work."},
			{type: 'image', url: 'http://farm8.staticflickr.com/7167/6638389979_678b569597_o.jpg', 
			content: "Designed analytics and graphs"}
		]},
		{date: '06-2011', company: 'iParadigms', title: 'Document Viewer (iPad)',	slug: 'dv-ipad', 			skills: [21,24], media: [
			{type: 'image', url: 'http://farm8.staticflickr.com/7016/6638752281_6d9b37daa8_o.jpg', 
			content: "Designed an iPad version of our flagship product. Used InVision to help piece together the different mocks &mdash; very instrumental when prototyping directly on an iPad."},
			{type: 'image', url: 'http://farm8.staticflickr.com/7143/6638752671_6ff757d0ac_b.jpg', content: ""},
			{type: 'image', url: 'http://farm8.staticflickr.com/7167/6638753055_d6a503f5e3_b.jpg', content: ""}
		]},
		{date: '11-2010', company: 'iParadigms', title: 'Document Viewer (web)',	slug: 'dv-web', 			skills: [21,22], media: []},
		{date: '06-2010', company: 'Convio',	 title: 'Participant Center', 		slug: 'pc', 				skills: [21,22], media: []},
		{date: '05-2008', company: 'Convio',	 title: 'MultiCenter Panel',	 	slug: 'multicenter-panel', 	skills: [1,5,21], media: []},
		{date: '01-2008', company: 'Personal', 	 title: 'Flickr Web Gallery',	 	slug: 'flickr-web-gallery', skills: [1,2,5,21], media: []}
	]);
		
	var websites = new Project;
	websites.add([
		{date: '09-2011', company: 'Gracepoint', title: 'acts2fellowship Website ("Magazine")',	slug: 'a2f-website-magazine', skills: [1,2,3,5,6,11,13,21,24], media: []},
		{date: '10-2010', company: 'Gracepoint', title: 'acts2fellowship Website ("Original")',	slug: 'a2f-website', skills: [1,2,3,11,13,21], media: []},
		{date: '02-2010', company: 'iParadigms', title: 'Turnitin Website Redesign',			slug: 'tii-web-redesign', skills: [1,2,3,5,6,21,22], media: []},
		{date: '11-2009', company: 'Convio', 	 title: 'Convio Open API Website',				slug: 'convio-open-api', skills: [1,2,3,5,6,21,24], media: []},
		{date: '05-2009', company: 'Gracepoint', title: 'Kairos Website',						slug: 'kairos-website', skills: [1,2,5,6,11,13,21], media: []}
	]);
	
	window.videos = new Project;
	videos.add([
		{date: '08-2011', company: 'Gracepoint', title: 'Thrive',	slug: 'thrive',	skills: [31,33], media: [
			{type: 'vimeo', url: '28083955', content: ''}
		]},
		{date: '04-2011', company: 'Gracepoint', title: 'Easter Intro',	slug: 'easter-intro', skills: [21,33], media: [
			{type: 'vimeo', url: '23226173', content: ''}
		]},
		{date: '08-2010', company: 'Gracepoint', title: 'Welcome to Gracepoint', slug: 'welcome-to-gracepoint',	skills: [21,31,33], media: [
			{type: 'vimeo', url: '15676413', content: ''}
		]},
		{date: '11-2009', company: 'Gracepoint', title: 'Thanksgiving Celebration Opening',	slug: 'tc-opening', skills: [22,33], media: [
			{type: 'vimeo', url: '12440157', height: 530, content: "Intro video that started Gracepoint's Thanksgiving Celebration. A look back into 2009, especially that of a recent production. Process began with blocking in the big bold letters and filling in all the items in Illustrator. Afterwards, everything is  ported into After Effects for animation. One week to complete from start to finish."}
		]},
		{date: '04-2009', company: 'Gracepoint', title: 'Gracepoint Live: Undo', slug: 'glive-undo', skills: [31], media: [
			{type: 'vimeo', url: '3993031', content: "**Intro video to a theatrical production**. Special thanks to the Class of 2009, from modifying a potato launcher to shoot out flour to set design (and providing actors). Matt was the awesome cameraman who operated smoothly without a glidecam, and Richard D. helped with graphic design and fashion tips. Props go out to Kevan, Jenny, Pastor Ed, and Kelly Kang for guidance through the midst of the project, when things went awry. Another big thanks to Conrad, Paul, and Po for helping with all things post-related, such as grading, retiming, foley effects, and the most important part, creating the soundtrack in less than one day."}
		]},
		{date: '12-2008', company: 'Personal', title: 'San Francisco Bart Surprise', slug: 'sf-bart-surprise', skills: [34,35], media: [
			{type: 'vimeo', url: '4157430', height: 530, content: "Visual effects project. Eight weeks to complete"}
		]},
		{date: '12-2008', company: 'Personal', title: 'Tenshin', slug: 'tenshin', skills: [34,35], media: [
			{type: 'vimeo', url: '5086644', height: 480, content: "15-week project that resulted in this two-second clip. First eight weeks to draw, design, and build the character in Maya; five weeks to rig and animate the characters; two weeks to composite with Shake and add final touches."}
		]},
		{date: '04-2007', company: 'Gracepoint', title: 'Gracepoint Live: Lost and Found', slug: 'glive-lost-found', skills: [31,35], media: [
			{type: 'vimeo', url: '3993031', height: 540, content: "**Intro video to a theatrical production**. Thanks to Conrad for helping on and off set, Matt for supervising fashion, Jackson for being the on-set assistant, and Jammy for finding the right soundtrack pieces. Another thanks to the actors, Jeff, Nelson, and Jenny, for being good sports through the whole process."}
		]}
	]);
	
	
	
		
	// Views
		
	/* Skillsets */
		
    var SkillsetsView = Backbone.View.extend({
        el: $('footer'),
		template: _.template($('#skillset-item-template').html()),
        initialize: function() {
            _.bindAll(this, 'render');
                
            this.render();
        },

        render: function() {
			var currentcat = 0;
			var div = $('<div>').addClass('span3');

            _(skillsets.models).each(function(item) {
				// create a new column
				if (currentcat != item.get('category')) {
					currentcat = item.get('category');
					$(this.el).append(div);
					div = $('<div>').addClass('span3');
				}
				div.append(this.template(item.toJSON()));
            }, this);
				
			// necessary for final column
			$(this.el).append(div);
        },
            
        addItem: function(contact) {
			var contactView = new ContactView({
				model: contact
			});
			$(this.el).append(contactView.render().el);
        },
            
        // highlight contact in list, and show its info
        showInfo: function(id) {
            $('.contact-item').removeClass('active');
            $('#contactlist-' + id).addClass('active');
            $('#contactinfo').html(this.template(contactsMini.get(id).toJSON()));
        }
    });
		
	var skillsetsview = new SkillsetsView;
		
	/* Main */
		
    var FrontCardView = Backbone.View.extend({
        el: $('#front'),
		template: _.template($('#slide-template').html()),

        initialize: function() {
            _.bindAll(this, 'render');
                
			// initialize slider bullets
            $('#bullets span').click(function() {
				var mult = $(this).attr('data-id') - 1; // multiplier: 0-4
				var move = mult * -820;					// constant: -820px
				$('#track').animate({left: move}, 500); // move track
					
				$('#bullets span').removeClass('active');
				$(this).addClass('active');
			});
			
			this.markdown = new Showdown.converter();
        },

        render: function(category, slug) {
			var c = eval(category);
			var project = null;
			var prev = null;
			var next = null;

			// if no slug, get the first object from the collection
			// todo: should show project list by default
			if(_.isUndefined(slug)) { 
				project = c.at(0); 
				next = c.at(1);
			}
			else {
				var i = 0;
				_.each(c.models, function(p) {
					if (p.get('slug') == slug) {
						project = p;
						if (i > 0) prev = c.at(i-1);
						if (i < c.length-1) next = c.at(i+1);
					}
					i++;
					// todo: what if slug cannot be found?
				});
			}
			
			// todo: update title
				
			// populate fields inside card
			$('#title').html(project.get('title'));
			$('#company').html(project.get('company'));
			var m = moment(project.get('date'), 'MM-YYYY');
			$('#date').html(m.format('MMM YYYY'));	// format date
			this.setNextPrev(next, 'next', category);
			this.setNextPrev(prev, 'prev', category);
				
			// highlight proper skillsets
			$('footer li').removeClass('highlight');
			_.each(project.get('skills'), function(id) {
				$('#skill-'+id).addClass('highlight');
			});
				
			// populate slides
			$('#track').html('');	// reset
			_.each(project.get('media'), function(m) {
				if (!m.height) m.height = 450;						// default height -- only applies to videos
				console.log(m.height);
				m.md_content = this.markdown.makeHtml(m.content);	// format (markdown) content
				$('#track').append(this.template(m));
			}, this);
				
			// show/hide/activate slider bullets
			var len = project.get('media').length;
			// don't show bullets at all if there's only 1
			if (len <= 1) {
				// cannot use .hide(); will mess up overall layout
				$('#bullets').css('visibility', 'hidden');
			}
			else {
				// reset bullets
				$('#bullets').css('visibility', 'visible');
				$('#bullets span').removeClass('active').hide();
					
				// show correct number of bullets
				for (i=0; i<len; i++) {
					var bullet = $('#bullets span')[i];
					$(bullet).show();
				}
				$('#bullets').removeClass().addClass('size' + len);
				$('#bullet-1').addClass('active');
			}
				
			// reset track
			$('#track').css('left', 0);
        },
			
		// nextprev = next | prev
		setNextPrev: function(project, nextprev, category) {
			var elem =  $('#' + nextprev)
			if (project) elem.attr('href', '#/' + category + '/' + project.get('slug')).removeClass('disabled');
			else elem.attr('href', '').addClass('disabled');
		}
	});
		
	var frontcardview = new FrontCardView;
		
    // Router
    var Portfolio = Backbone.Router.extend({
       routes: {
           "": "webapps",
           "/webapps": "webapps",
           "/webapps/:slug": "webapps",
		   "/websites": "websites",
		   "/websites/:slug": "websites",
		   "/videos": "videos",
		   "/videos/:slug": "videos"
       }, 
       webapps: function(slug) {
		   this.goto('webapps', slug);
       },
       websites: function(slug) {
		   this.goto('websites', slug);
       },
       videos: function(slug) {
		   this.goto('videos', slug);
       },
	   goto: function(category, slug) {
		   $('#nav li').removeClass('active');
		   $('#nav-'+category).addClass('active');
		   frontcardview.render(category, slug);
	   }
    });
        
    var portfolio = new Portfolio;
    Backbone.history.start();
		
		
});

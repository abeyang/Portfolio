$(function() {
    less.env = "development";
    less.watch();
		
	// Collections
		
    var Skillsets = Backbone.Collection.extend({
		// ...
    });
		
	window.skillsets = new Skillsets;
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
		
	/* media should be 800 x 450 (or fullsize at 800 x 560 w/ no content)*/
		
	window.webapps = new Project;
	webapps.add([
		{date: '09-2011', company: 'iParadigms', title: 'Turnitin Dashboard',		slug: 'tii-dashboard', 		skills: [1,2,4,5,6,7,21], media: [
			{type: 'image', url: 'http://farm8.staticflickr.com/7166/6638389465_2084d7fab9_o.jpg', 
			content: "**Designed** a dashboard that gives instructors a bird's eye view to see assignments from all their classes. I also **implemented a working prototype** to give us a better idea as to how all the different interactions (on-hover, dropdown, on-click, etc) would work."},
			{type: 'image', url: 'http://farm8.staticflickr.com/7167/6638389979_678b569597_o.jpg', 
			content: "Version 2 of the project includes analytics and graphs."}
		]},
		{date: '06-2011', company: 'iParadigms', title: 'Document Viewer (iPad)',	slug: 'dv-ipad', 			skills: [21,24], media: [
			{type: 'image', url: 'http://farm8.staticflickr.com/7016/6638752281_6d9b37daa8_o.jpg', content: "Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."},
			{type: 'image', url: 'http://farm8.staticflickr.com/7143/6638752671_6ff757d0ac_b.jpg', content: ""},
			{type: 'image', url: 'http://farm8.staticflickr.com/7167/6638753055_d6a503f5e3_b.jpg', content: ""}
			
		]},
		{date: '11-2010', company: 'iParadigms', title: 'Document Viewer (web)',	slug: 'dv-web', 			skills: [21,22], media: []},
		{date: '06-2010', company: 'Convio',	 title: 'Participant Center', 		slug: 'pc', 				skills: [21,22], media: []},
		{date: '05-2008', company: 'Convio',	 title: 'MultiCenter Panel',	 	slug: 'multicenter-panel', 	skills: [1,5,21], media: []},
		{date: '01-2008', company: 'Personal', 	 title: 'Flickr Web Gallery',	 	slug: 'flickr-web-gallery', skills: [1,2,5,21], media: []}
	]);
		
	window.websites = new Project;
	websites.add([
		{date: '09-2011', company: 'Gracepoint', title: 'acts2fellowship Website ("Magazine")',	skills: [1,2,3,5,6,11,13,21,24], media: []},
		{date: '10-2010', company: 'Gracepoint', title: 'acts2fellowship Website ("Original")',	skills: [1,2,3,11,13,21], media: []},
		{date: '02-2010', company: 'iParadigms', title: 'Turnitin Website Redesign',			skills: [1,2,3,5,6,21,22], media: []},
		{date: '11-2009', company: 'Convio', 	 title: 'Convio Open API Website',				skills: [1,2,3,5,6,21,24], media: []},
		{date: '05-2009', company: 'Gracepoint', title: 'Kairos Website',						skills: [1,2,5,6,11,13,21], media: []}
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
				var move = mult * -810;					// constant: -810px
				$('#track').animate({left: move}, 500); // move track
					
				$('#bullets span').removeClass('active');
				$(this).addClass('active');
			});
        },

        render: function(category, slug) {
			var c = eval(category);
			var project = null;
			var prev = null;
			var next = null;

			// if no slug, get the first object from the collection
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
				
			// populate fields inside card
			$('#title').html(project.get('title'));
			$('#company').html(project.get('company'));
			$('#date').html(project.get('date'));	// todo: change date to proper format
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
				$('#track').append(this.template(m));
			}, this);
				
			// show/hide/activate slider bullets
			var len = project.get('media').length;
			// don't show bullets at all if there's only 1
			if (len <= 1) {
				// .hide() will mess up overall layout
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
           "/webapps/:slug": "webapps"
       }, 
       webapps: function(slug) {
		   this.goto('webapps', slug);
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

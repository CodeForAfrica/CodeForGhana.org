---
layout: post
date: 2015-12-16
thumbnail: /img/blog/ghanagdp.png
title: Overview of Ghana's GDP (2006 - 2014)
---
A country’s Gross Domestic Product refers to ‘the monetary value of all the finished goods and services produced within the borders of the country in a specific time period’. Though it is usually measured over a one-year period, it can be also be measured after six months. 

GDP remains one of the best indications of a country’s economic growth or decline. However, there are some arguments against its reliability to reveal the actual economic state of a country. In the sense that, when a country’s GDP is high, it only translates into high standards of living once other factors are held constant. For example, if there is an equivalent growth in the population of a country as in its GDP - in the same period -  this does not necessarily project a forthcoming high standard of living. Simply because, the equivalent growth in the population cancels out any positive effect the growth in the GDP might have on the citizens. Nevertheless, GDP is still used widely all over the world to measure and announce the economic state of a country.

The Ghanaian economy has not been in the best of shapes for some time now. This may be due to so many factors. However, that is not the focus for this post. We are looking at the GDP of Ghana between 2006 and 2014 and the contributions of the various sectors of the economy: Agriculture, Industry and Services. Below is an infographic representation of the various sectors of the economy, their various sub-sectors and how much they contributed to the entire economy in the year 2014.  

<div id="chart" style="height:650px;"></div>

######Major Sectors of Ghana's Economy

The visualization above represents the major sectors of the Ghanaian economy. Taking a critical look at Ghana’s GDP in 2014, we can clearly see that the Services sector contributed benevolently; it contributed more greatly than the other sectors. The Services sector is made up of: Education, Information and Technology, Security, Health and Social Work, Financial and Insurance Activities etc. All these have been illustrated above. One may ask if the Services sector is therefore the greatest contributor to our economy? Well, looking at the GDP breakdown for one year is not good enough to reveal this to us. We would have to study the Ghanaian economy over a period of time to determine this fact. After closely studying the economy from 2006 to 2014, it revealed that the pattern has always been the same: the Services sector remains the greatest contributor to our economy. The services sector contributes close to half of the GDP for some years and for others, either exactly half or a little over that. In 2011, both the Industrial sector and the Agricultural sector contributed about 25% apiece to the GDP. Which also buttresses the point stated above: the Services sector in 2011, almost made a 50% contribution to the GDP. All these are also represented in the line graph below:

<div id="overall-gdp"></div>
It has already been hinted above that there are several sub-sectors of each of the major sectors. The Services sector, being the greatest contributor to the GDP has the most sub-sectors. This is followed closely by the Industrial sector before the Agricultural sector. When the data is viewed from the angle of sub-sectors, it reveals a very interesting upset. Crops, which is under the Agricultural sector has been the greatest contributor to the country's GDP between 2006 and 2014. This is surprising considering the fact that the Agric. sector’s contribution yearly to the GDP hovers around 20%. After Crops, the second highest contributing sub-sector is Transport and Storage, which is under the Services sector. This is also closely followed by Manufacturing (also under the Services Sector). A close look at the line graph below shows the steady rise of Construction, throughout the years to become the second highest contributing sub-sector in the Ghanaian economy in 2014. All these and more are revealed in the line graph below:

<div id="sector-gdp"></div>


<script src="http://www.d3plus.org/js/d3.js"></script>
<script src="http://www.d3plus.org/js/d3plus.js"></script>

<!-- create container element for visualization -->
<div id="overall-gdp"></div>
<hr />
<hr />
<div id="sector-gdp"></div>
<script>

  // sample data array
  var sample_data = [
    {"year": 2006, "name":"Crops", "details": "Details", "value": 21.3},
    {"year": 2007, "name":"Crops", "value": 20.3 },
    {"year": 2008, "name":"Crops", "value": 22.4},
    {"year": 2009, "name":"Crops", "value": 23.6 },
    {"year": 2010, "name":"Crops", "value": 21.7},
    {"year": 2011, "name":"Crops", "value": 19.1},
    {"year": 2012, "name":"Crops", "value": 17.2},
    {"year": 2013, "name":"Crops", "value": 17.4},
    {"year": 2014, "name":"Crops", "value": 16.8},
    {"year": 2006, "name":"Livestock", "value": 2.5},
    {"year": 2007, "name":"Livestock", "value": 2.3},
    {"year": 2008, "name":"Livestock", "value": 2.1},
    {"year": 2009, "name":"Livestock", "value": 2},
    {"year": 2010, "name":"Livestock", "value": 2},
    {"year": 2011, "name":"Livestock", "value": 1.8},
    {"year": 2012, "name":"Livestock", "value": 1.6},
    {"year": 2013, "name":"Livestock", "value": 1.4},
    {"year": 2014, "name":"Livestock", "value": 1.2},
    {"year": 2006, "name":"Forestry and Logging", "value": 4.1},
    {"year": 2007, "name":"Forestry and Logging", "value": 4.2},
    {"year": 2008, "name":"Forestry and Logging", "value": 3.7},
    {"year": 2009, "name":"Forestry and Logging", "value": 3.7},
    {"year": 2010, "name":"Forestry and Logging", "value": 3.7},
    {"year": 2011, "name":"Forestry and Logging", "value": 2.8},
    {"year": 2012, "name":"Forestry and Logging", "value": 2.6},
    {"year": 2013, "name":"Forestry and Logging", "value": 2.2},
    {"year": 2014, "name":"Forestry and Logging", "value": 2.3},
    {"year": 2006, "name":"Fishing", "value": 2.5},
    {"year": 2007, "name":"Fishing", "value": 2.3},
    {"year": 2008, "name":"Fishing", "value": 2.7},
    {"year": 2009, "name":"Fishing", "value": 2.5},
    {"year": 2010, "name":"Fishing", "value": 2.3},
    {"year": 2011, "name":"Fishing", "value": 1.7},
    {"year": 2012, "name":"Fishing", "value": 1.5},
    {"year": 2013, "name":"Fishing", "value": 1.4},
    {"year": 2014, "name":"Fishing", "value": 1.2},
    {"year": 2006, "name":"Mining and Quarrying", "value": 2.8},
    {"year": 2007, "name":"Mining and Quarrying", "value": 2.8},
    {"year": 2008, "name":"Mining and Quarrying", "value": 2.4},
    {"year": 2009, "name":"Mining and Quarrying", "value": 2.1},
    {"year": 2010, "name":"Mining and Quarrying", "value": 2.3},
    {"year": 2011, "name":"Mining and Quarrying", "value": 8.4},
    {"year": 2012, "name":"Mining and Quarrying", "value": 9.5},
    {"year": 2013, "name":"Mining and Quarrying", "value": 9.4},
    {"year": 2014, "name":"Mining and Quarrying", "value": 8}, 
    {"year": 2006, "name":"Manufacturing", "value": 10.2},
    {"year": 2007, "name":"Manufacturing", "value": 9.1},
    {"year": 2008, "name":"Manufacturing", "value": 7.9},
    {"year": 2009, "name":"Manufacturing", "value": 6.9},
    {"year": 2010, "name":"Manufacturing", "value": 6.8},
    {"year": 2011, "name":"Manufacturing", "value": 6.9},
    {"year": 2012, "name":"Manufacturing", "value": 5.8},
    {"year": 2013, "name":"Manufacturing", "value": 5.3},
    {"year": 2014, "name":"Manufacturing", "value": 4.9}, 
    {"year": 2006, "name":"Electricity", "value": 0.8},
    {"year": 2007, "name":"Electricity", "value": 0.6},
    {"year": 2008, "name":"Electricity", "value": 0.5},
    {"year": 2009, "name":"Electricity", "value": 0.5},
    {"year": 2010, "name":"Electricity", "value": 0.6},
    {"year": 2011, "name":"Electricity", "value": 0.5},
    {"year": 2012, "name":"Electricity", "value": 0.5},
    {"year": 2013, "name":"Electricity", "value": 0.4},
    {"year": 2014, "name":"Electricity", "value": 0.4}, 
    {"year": 2006, "name":"Water and Sewerage", "value": 1.3},
    {"year": 2007, "name":"Water and Sewerage", "value": 1},
    {"year": 2008, "name":"Water and Sewerage", "value": 0.8},
    {"year": 2009, "name":"Water and Sewerage", "value": 0.7},
    {"year": 2010, "name":"Water and Sewerage", "value": 0.8},
    {"year": 2011, "name":"Water and Sewerage", "value": 0.8},
    {"year": 2012, "name":"Water and Sewerage", "value": 0.7},
    {"year": 2013, "name":"Water and Sewerage", "value": 0.6},
    {"year": 2014, "name":"Water and Sewerage", "value": 0.5}, 
    {"year": 2006, "name":"Construction", "value": 5.7},
    {"year": 2007, "name":"Construction", "value": 7.2},
    {"year": 2008, "name":"Construction", "value": 8.7},
    {"year": 2009, "name":"Construction", "value": 8.8},
    {"year": 2010, "name":"Construction", "value": 8.5},
    {"year": 2011, "name":"Construction", "value": 8.9},
    {"year": 2012, "name":"Construction", "value": 11.5},
    {"year": 2013, "name":"Construction", "value": 12},
    {"year": 2014, "name":"Construction", "value": 12.7},    
    {"year": 2006, "name":"Trade Repair Of Vehicles, Household Goods", "value": 6.4},
    {"year": 2007, "name":"Trade Repair Of Vehicles, Household Goods", "value": 6.1},
    {"year": 2008, "name":"Trade Repair Of Vehicles, Household Goods", "value": 6},
    {"year": 2009, "name":"Trade Repair Of Vehicles, Household Goods", "value": 5.9},
    {"year": 2010, "name":"Trade Repair Of Vehicles, Household Goods", "value": 6.2},
    {"year": 2011, "name":"Trade Repair Of Vehicles, Household Goods", "value": 5.9},
    {"year": 2012, "name":"Trade Repair Of Vehicles, Household Goods", "value": 5.6},
    {"year": 2013, "name":"Trade Repair Of Vehicles, Household Goods", "value": 5.8},
    {"year": 2014, "name":"Trade Repair Of Vehicles, Household Goods", "value": 5.6},
    {"year": 2006, "name":"Hotels and Restaurants", "value": 5},
    {"year": 2007, "name":"Hotels and Restaurants", "value": 5.6},
    {"year": 2008, "name":"Hotels and Restaurants", "value": 6},
    {"year": 2009, "name":"Hotels and Restaurants", "value": 6.2},
    {"year": 2010, "name":"Hotels and Restaurants", "value": 6},
    {"year": 2011, "name":"Hotels and Restaurants", "value": 5.4},
    {"year": 2012, "name":"Hotels and Restaurants", "value": 4.8},
    {"year": 2013, "name":"Hotels and Restaurants", "value": 5.8},
    {"year": 2014, "name":"Hotels and Restaurants", "value": 5.6},
    {"year": 2006, "name":"Transport and Storage", "value": 13.2},
    {"year": 2007, "name":"Transport and Storage", "value": 13.1},
    {"year": 2008, "name":"Transport and Storage", "value": 11.4},
    {"year": 2009, "name":"Transport and Storage", "value": 10.5},
    {"year": 2010, "name":"Transport and Storage", "value": 10.6},
    {"year": 2011, "name":"Transport and Storage", "value": 10.7},
    {"year": 2012, "name":"Transport and Storage", "value": 11},
    {"year": 2013, "name":"Transport and Storage", "value": 11.2},
    {"year": 2014, "name":"Transport and Storage", "value": 12.3},  
    {"year": 2006, "name":"Information and communication", "value": 2.7},
    {"year": 2007, "name":"Information and communication", "value": 2.4},
    {"year": 2008, "name":"Information and communication", "value": 2.2},
    {"year": 2009, "name":"Information and communication", "value": 1.8},
    {"year": 2010, "name":"Information and communication", "value": 1.9},
    {"year": 2011, "name":"Information and communication", "value": 1.8},
    {"year": 2012, "name":"Information and communication", "value": 2.2},
    {"year": 2013, "name":"Information and communication", "value": 1.7},
    {"year": 2014, "name":"Information and communication", "value": 2.3},  
    {"year": 2006, "name":"Financial and Insurance Activities", "value": 2.7},
    {"year": 2007, "name":"Financial and Insurance Activities", "value": 3.4},
    {"year": 2008, "name":"Financial and Insurance Activities", "value": 3.8},
    {"year": 2009, "name":"Financial and Insurance Activities", "value": 4.3},
    {"year": 2010, "name":"Financial and Insurance Activities", "value": 5.2},
    {"year": 2011, "name":"Financial and Insurance Activities", "value": 4.4},
    {"year": 2012, "name":"Financial and Insurance Activities", "value": 4.7},
    {"year": 2013, "name":"Financial and Insurance Activities", "value": 6.5},
    {"year": 2014, "name":"Financial and Insurance Activities", "value": 8.4},  
    {"year": 2006, "name":"Real Estate, Professional, Administrative and Support Service activities", "value": 5.1},
    {"year": 2007, "name":"Real Estate, Professional, Administrative and Support Service activities", "value": 4.7},
    {"year": 2008, "name":"Real Estate, Professional, Administrative and Support Service activities", "value": 4.1},
    {"year": 2009, "name":"Real Estate, Professional, Administrative and Support Service activities", "value": 4.1},
    {"year": 2010, "name":"Real Estate, Professional, Administrative and Support Service activities", "value": 4.5},
    {"year": 2011, "name":"Real Estate, Professional, Administrative and Support Service activities", "value": 4.6},
    {"year": 2012, "name":"Real Estate, Professional, Administrative and Support Service activities", "value": 4.8},
    {"year": 2013, "name":"Real Estate, Professional, Administrative and Support Service activities", "value": 3.9},
    {"year": 2014, "name":"Real Estate, Professional, Administrative and Support Service activities", "value": 3.6},  
    {"year": 2006, "name":"Education", "value": 3.7},
    {"year": 2007, "name":"Education", "value": 3.9},
    {"year": 2008, "name":"Education", "value": 3.9},
    {"year": 2009, "name":"Education", "value": 4.2},
    {"year": 2010, "name":"Education", "value": 4.3},
    {"year": 2011, "name":"Education", "value": 4.1},
    {"year": 2012, "name":"Education", "value": 4.3},
    {"year": 2013, "name":"Education", "value": 3.6},
    {"year": 2014, "name":"Education", "value": 3.6},
    {"year": 2006, "name":"ealth And Social Work", "value": 1.4},
    {"year": 2007, "name":"ealth And Social Work", "value": 1.4},
    {"year": 2008, "name":"ealth And Social Work", "value": 1.3},
    {"year": 2009, "name":"ealth And Social Work", "value": 1.4},
    {"year": 2010, "name":"ealth And Social Work", "value": 1.6},
    {"year": 2011, "name":"ealth And Social Work", "value": 1.3},
    {"year": 2012, "name":"ealth And Social Work", "value": 1.3},
    {"year": 2013, "name":"ealth And Social Work", "value": 1.1},
    {"year": 2014, "name":"ealth And Social Work", "value": 1},        
    {"year": 2006, "name":"Community, Social & Personal Service Activitiesk", "value": 3.7},
    {"year": 2007, "name":"Community, Social & Personal Service Activitiesk", "value": 3.7},
    {"year": 2008, "name":"Community, Social & Personal Service Activitiesk", "value": 3.6},
    {"year": 2009, "name":"Community, Social & Personal Service Activitiesk", "value": 3.7},
    {"year": 2010, "name":"Community, Social & Personal Service Activitiesk", "value": 4},
    {"year": 2011, "name":"Community, Social & Personal Service Activitiesk", "value": 3.9},
    {"year": 2012, "name":"Community, Social & Personal Service Activitiesk", "value": 3.7},
    {"year": 2013, "name":"Community, Social & Personal Service Activitiesk", "value": 4.3},
    {"year": 2014, "name":"Community, Social & Personal Service Activitiesk", "value": 4.1},                 
  ]



	var htmlButton = "<h2 id='tooltip-header'>Some More Details</h3><hr />";

                              


  // instantiate d3plus
  var visualization = d3plus.viz()
    .container("#sector-gdp")  // container DIV to hold the visualization
    .data(sample_data)  // data to use with the visualization
    .type("line")       // visualization type
    .title("Break Down of Sub Sectors")
    .id("name")         // key for which our data is unique on
    .text("name")       // key to use for display text
    .height(400)
    .y("value")         // key to use for y-axis
    .x("year")          // key to use for x-axis
		.format({
	      		"text": function(text, key) {
	        	    if (text === "value") {
			          return "Value";
			        }
	 		        else {
	 		          return d3plus.string.title(text, key);
	 		        }
	        
	      		},
		      	"number": function(number, key) {
		          var formatted = d3plus.number.format(number, key)
		          if (key.key === "value") {
		        	return formatted + " %"
		          }
		          else {
		            return formatted
		          }
		          
		        }
			})
    .draw()             // finally, draw the visualization!

</script>

<script>

  // sample data array
  var sample_data = [
    {"year": 2006, "name":"Agriculture", "details": "Details", "value": 30.4},
    {"year": 2007, "name":"Agriculture", "value": 29.1 },
    {"year": 2008, "name":"Agriculture", "value": 31.0},
    {"year": 2009, "name":"Agriculture", "value": 31.8 },
    {"year": 2010, "name":"Agriculture", "value": 29.8},
    {"year": 2011, "name":"Agriculture", "value": 25.3},
    {"year": 2012, "name":"Agriculture", "value": 22.9},
    {"year": 2013, "name":"Agriculture", "value": 22.4},
    {"year": 2014, "name":"Agriculture", "value": 21.5},
    {"year": 2006, "name":"Services", "value": 48.8},
		{"year": 2007, "name":"Services", "value": 50.2},
		{"year": 2008, "name":"Services", "value": 48.6},
		{"year": 2009, "name":"Services", "value": 49.2},
    {"year": 2010, "name":"Services", "value": 51.1},
		{"year": 2011, "name":"Services", "value": 49.1},
    {"year": 2012, "name":"Services", "value": 49.1},
    {"year": 2013, "name":"Services", "value": 49.8},
    {"year": 2014, "name":"Services", "value": 51.9},
    {"year": 2006, "name":"Industry", "value": 20.8},
    {"year": 2007, "name":"Industry", "value": 20.7},
    {"year": 2008, "name":"Industry", "value": 20.4},
    {"year": 2009, "name":"Industry", "value": 19.0},
    {"year": 2010, "name":"Industry", "value": 19.1},
    {"year": 2011, "name":"Industry", "value": 25.6},
    {"year": 2012, "name":"Industry", "value": 28.0},
    {"year": 2013, "name":"Industry", "value": 27.8},
		{"year": 2014, "name":"Industry", "value": 26.6},
    ]


  // instantiate d3plus
  var visualization = d3plus.viz()
    .container("#overall-gdp")  // container DIV to hold the visualization
    .data(sample_data)  // data to use with the visualization
    .type("line")       // visualization type
    .title("Contribution of Major Economic Sectors")
    .id("name")  
    .height(400)      // key for which our data is unique on
    .text("name")       // key to use for display text
    .y("value")         // key to use for y-axis
    .x("year")          // key to use for x-axis
		.format({
	      		"text": function(text, key) {
	        	    if (text === "value") {
			          return "Value";
			        }
	 		        else {
	 		          return d3plus.string.title(text, key);
	 		        }
	        
	      		},
		      	"number": function(number, key) {
		          var formatted = d3plus.number.format(number, key)
		          if (key.key === "value") {
		        	return formatted + " %"
		          }
		          else {
		            return formatted
		          }
		          
		        }
			})
    .draw()             // finally, draw the visualization!

</script>



<script>

var margin = 20,
    diameter = 650;

var color = d3.scale.linear()
    .domain([-1, 5])
    .range(["#ccc", "#cc0000"])
    .interpolate(d3.interpolateHcl);

var pack = d3.layout.pack()
    .padding(2)
    .size([diameter - margin, diameter - margin])
    .value(function(d) { return d.size; })

var svg = d3.select("#chart").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
  .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

d3.json("/js/gdpdata.json", function(error, root) {
  if (error) throw error;

  var focus = root,
      nodes = pack.nodes(root),
      view;

  var circle = svg.selectAll("circle")
      .data(nodes)
    .enter().append("circle")
      .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
      .style("fill", function(d) { return d.children ? color(d.depth) : null; })
      .on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

  var text = svg.selectAll("text")
      .data(nodes)
    .enter().append("text")
      .attr("class", "label")
      .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
      .style("display", function(d) { return d.parent === root ? "inline" : "none"; })
      .text(function(d) { return d.name; });

  var node = svg.selectAll("circle,text");

  d3.select("#chart")
      .style("background", color(-1))
      .on("click", function() { zoom(root); });

  zoomTo([root.x, root.y, root.r * 2 + margin]);

  function zoom(d) {
    var focus0 = focus; focus = d;

    var transition = d3.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween("zoom", function(d) {
          var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
          return function(t) { zoomTo(i(t)); };
        });

    transition.selectAll("text")
      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
        .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
        .each("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .each("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
  }

  function zoomTo(v) {
    var k = diameter / v[2]; view = v;
    node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
    circle.attr("r", function(d) { return d.r * k; });
  }
});

d3.select(self.frameElement).style("height", diameter + "px");

</script>

































































var fs = require('fs');


var data = fs.readFileSync('./FoodFacts.csv', 'utf-8');
var lines = data.split("\n");

//the first line contains the heading of the column which are meta data. so taking it seperately.
var header = lines[0].split(",");
var finaldata = [];
var splitted = [];
var collect_attr;
var obb;
var ctry_count;
var many_countries_arr;
var many_countries;
var re = /,(?=(?:(?:[^\"]*\"){2})*[^\"]*$)/;
var obarray = [];

var k=0;





for (var i = 1; i < lines.length - 1; i++) {
    //this was my regex =>  splitted = lines[i].split(/,(?![^"]*",)/);
    splitted = lines[i].split(re);

    //the countries column may have many countries, so we have to create a seperate object for each country. the below code checks
    //and does it.
    if (splitted[33].includes(",")) {
        many_countries = splitted[33].slice(1, -1);
        many_countries_arr = many_countries.split(/,/);
        for (var m = 0; m < many_countries_arr.length; m++)
        {
        	obb ={
            countries_en: many_countries_arr[m],
            sugars_100g: splitted[102],
            salt_100g: splitted[116],
            carbohydrates_100g: splitted[101],
            fat_100g: splitted[65],
            proteins_100g: splitted[112]
        	}
        	obarray[k++] = obb;
        }


    } else
     {
        obb = {

            countries_en: splitted[33],
            sugars_100g: splitted[102],
            salt_100g: splitted[116],
            carbohydrates_100g: splitted[101],
            fat_100g: splitted[65],
            proteins_100g: splitted[112]
        }
        obarray[k++] = obb;
    }
}

collect_attr = JSON.stringify(obarray, null, "\t\n\t");
//now we have all the data to be written in a single string. Just write it to the json file directly.
console.log(obarray.length);
fs.writeFileSync('./jsonfile', collect_attr, 'utf-8');


























var data_arr = fs.readFileSync("./jsonfile");
var data_arr = JSON.parse(data_arr);




var nether_count_su=0;
var canada_count_su=0;
var uk_count_su=0;
var us_count_su=0;
var aus_count_su=0;
var france_count_su=0;
var germ_count_su=0;
var spain_count_su=0;
var africa_count_su=0;


var nether_count_sa=0;
var canada_count_sa=0;
var uk_count_sa=0;
var us_count_sa=0;
var aus_count_sa=0;
var france_count_sa=0;
var germ_count_sa=0;
var spain_count_sa=0;
var africa_count_sa=0;


var json_one_data = [
{
    "countries_en": "Netherlands",
    "salt_100g": 0,
    "sugars_100g": 0
},
{
    "countries_en": "Canada",
    "salt_100g": 0,
    "sugars_100g": 0
},
{
    "countries_en": "United Kingdom",
    "salt_100g": 0,
    "sugars_100g": 0
},
{
    "countries_en": "United States",
    "salt_100g": 0,
    "sugars_100g": 0
},
{
    "countries_en": "Australia",
    "salt_100g": 0,
    "sugars_100g": 0
},
{
    "countries_en": "France",
    "salt_100g": 0,
    "sugars_100g": 0
},
{
    "countries_en": "Germany",
    "salt_100g": 0,
    "sugars_100g": 0
},
{
    "countries_en": "Spain",
    "salt_100g": 0,
    "sugars_100g": 0
},
{
    "countries_en": "South Africa",
    "salt_100g": 0,
    "sugars_100g": 0
}
];




for (var k = 0; k < data_arr.length; k++)
{
    if (data_arr[k].countries_en == "Netherlands")
    {
        
            nether_count_su++;
    
            nether_count_sa++;
        
        json_one_data[0].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[0].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "Canada")
    {
        
            canada_count_su++;
        
            canada_count_sa++;
        json_one_data[1].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[1].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "United Kingdom")
    {
        
            uk_count_su++;
   
            uk_count_sa++;
        json_one_data[2].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[2].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "United States") 
    {
    
            us_count_su++;

            us_count_sa++;
        json_one_data[3].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[3].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "Australia") 
    {
    
            aus_count_su++;
    
            aus_count_sa++;
        json_one_data[4].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[4].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "France") 
    {
  
            france_count_su++;
        
            france_count_sa++;
        json_one_data[5].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[5].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "Germany") 
    {
    
            germ_count_su++;

            germ_count_sa++;
        json_one_data[6].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[6].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "Spain") 
    {
        
            spain_count_su++;

            spain_count_sa++;
        json_one_data[7].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[7].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "South Africa") 
    {

            africa_count_su++;

            africa_count_sa++;
        json_one_data[8].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[8].salt_100g +=(isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    }
    else
    {
        
    }

}

json_one_data[0].sugars_100g /= nether_count_su;
json_one_data[0].salt_100g /= nether_count_sa;

json_one_data[1].sugars_100g /= canada_count_su ;
json_one_data[1].salt_100g /= canada_count_sa;
json_one_data[2].sugars_100g /= uk_count_su;
json_one_data[2].salt_100g /= uk_count_sa;
json_one_data[3].sugars_100g /= us_count_su;
json_one_data[3].salt_100g /= us_count_sa;
json_one_data[4].sugars_100g /= aus_count_su;
json_one_data[4].salt_100g /= aus_count_sa;
json_one_data[5].sugars_100g /= france_count_su;
json_one_data[5].salt_100g /= france_count_sa;
json_one_data[6].sugars_100g /= germ_count_su;
json_one_data[6].salt_100g /= germ_count_sa;
json_one_data[7].sugars_100g /= spain_count_su;
json_one_data[7].salt_100g /= spain_count_sa;
json_one_data[8].sugars_100g /= africa_count_su;
json_one_data[8].salt_100g /= africa_count_sa;

var json_one_output = JSON.stringify(json_one_data,null,"\t\n\t");
fs.writeFileSync('./json_one', json_one_output);





























var data_in = fs.readFileSync('./jsonfile','utf-8');
data_in = JSON.parse(data_in);
//console.log(data_in);
var json_data_two;
var continents;


if(fs.existsSync('json_two'))
{

        console.log("json_two exists.");
        json_data_two = fs.readFileSync('./json_two','utf-8');
        json_data_two = JSON.parse(json_data_two);
}
else
{
        fs.openSync("json_two",'w');
        fs.writeFileSync("json_two","{}");
        json_data_two = fs.readFileSync('./json_two','utf-8');
        json_data_two = JSON.parse(json_data_two);
}


if(fs.existsSync('json_two_continents'))
{

        console.log("json_two_continents exists.");
        continents = fs.readFileSync('./json_two_continents','utf-8');
        continents = JSON.parse(continents);
}
else
{
        fs.openSync("json_two_continents",'w');
        fs.writeFileSync("json_two_continents","{}");
        continents = fs.readFileSync('./json_two_continents','utf-8');
        continents = JSON.parse(continents);
}



function add_continent(continent_name)
{
     if(continents.hasOwnProperty(continent_name+"_list"))
        console.log(continent_name + " Already exists, add_continent failed.\n");

     else
     {

        continents[continent_name+"_list"] = [];
        json_data_two[continent_name] = {fat: 0,carb:0,prot:0,count:0};
        console.log(continent_name + " Added.\n");
     }
}

function add_country(country_name,continent_name)
{
    var count =0;
    
    if(!continents.hasOwnProperty(continent_name+"_list"))
        console.log("Continent "+continent_name+" is not there in the continents list. Add it first. Adding "+country_name+" failed.\n");
    else if(continents[continent_name+"_list"].includes(country_name))
    {
        console.log(country_name + " is already in the list. adding failed.")
    }
    else
    {
        var json_fat = json_data_two[continent_name].fat*json_data_two[continent_name].count;
        var json_carb = json_data_two[continent_name].carb*json_data_two[continent_name].count;
        var json_prot = json_data_two[continent_name].prot*json_data_two[continent_name].count;
        continents[continent_name+"_list"].push(country_name);
        
        for(var i = 0;i<data_in.length;i++)
        {
            if(country_name == data_in[i].countries_en)
            {
               json_data_two[continent_name].count++;
                json_fat += (isNaN(parseFloat(data_in[i].fat_100g)) ? 0: parseFloat(data_in[i].fat_100g));
                json_carb += (isNaN(parseFloat(data_in[i].carbohydrates_100g)) ? 0: parseFloat(data_in[i].carbohydrates_100g));
                json_prot += (isNaN(parseFloat(data_in[i].proteins_100g)) ? 0: parseFloat(data_in[i].proteins_100g));
            7}
        }
        console.log(json_fat);
        console.log(json_prot);
        console.log(json_carb);
        json_data_two[continent_name].fat = json_fat/json_data_two[continent_name].count;
        json_data_two[continent_name].carb = json_carb/json_data_two[continent_name].count;
        json_data_two[continent_name].prot = json_prot/json_data_two[continent_name].count;
        console.log(country_name+" added to "+continent_name+"\n");
    }

}


add_continent("NE");
add_continent("CE");
add_continent("SE");
add_country("United Kingdom","NE");
add_country("Denmark","NE");
add_country("Sweden","NE");
add_country("Norway","NE");
add_country("France","CE");
add_country("Belgium","CE");
add_country("Germany","CE");
add_country("Switzerland","CE");
add_country("Netherlands","CE");
add_country("Portugal","SE");
add_country("Greece","SE");
add_country("Italy","SE");
add_country("Spain","SE");
add_country("Croatia","SE");
add_country("Albania","SE");
add_continent("Asia");
add_country("Taiwan","Asia");




json_data_two =JSON.stringify(json_data_two,null,"\t\n\t"); 
fs.writeFileSync('json_two',json_data_two);
continents = JSON.stringify(continents,null,"\t\n\t");
fs.writeFileSync('json_two_continents',continents);
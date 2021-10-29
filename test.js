
    async function fetchThis() {
  
        const fetchData = await fetch('http://tobitheme.net/api/characters.json'); 
        return await fetchData.json();
    }
    fetchThis().then(
      data => {
            document.getElementById('characters_name').innerHTML = data['data'][0]['name'];
            document.getElementById('characters_species').innerHTML = data['data'][0]['species'];
            document.getElementById('characters_gender').innerHTML = data['data'][0]['gender'];
            document.getElementById('characters_house').innerHTML = data['data'][0]['house'];
            document.getElementById('characters_dateOfBirth').innerHTML = data['data'][0]['dateOfBirth'];
            document.getElementById('characters_yearOfBirth').innerHTML = data['data'][0]['yearOfBirth'];
            document.getElementById('characters_ancestry').innerHTML = data['data'][0]['ancestry'];
            document.getElementById('characters_eyeColour').innerHTML = data['data'][0]['eyeColour'];
            document.getElementById('characters_hairColour').innerHTML = data['data'][0]['hairColour'];
            document.getElementById('characters_wand').innerHTML = data['data'][0]['wand'];
            document.getElementById('characters_patronus').innerHTML = data['data'][0]['patronus'];
            document.getElementById('characters_hogwartsStudent').innerHTML = data['data'][0]['hogwartsStudent'];
            document.getElementById('characters_actor').innerHTML = data['data'][0]['actor'];
            document.getElementById('characters_hogwartsStaff').innerHTML = data['data'][0]['hogwartsStaff'];
            document.getElementById('characters_hogwartsStaff').innerHTML = data['data'][0]['hogwartsStaff'];
    

      
      
      
        }
        );
    
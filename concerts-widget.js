(function(){
  async function fetchConcerts(endpoint){
    const res = await fetch(endpoint);
    if(!res.ok) throw new Error('Failed to load concerts');
    return res.json();
  }

  window.renderConcerts = async function(containerId, endpoint){
    const container = document.getElementById(containerId);
    if(!container) return;
    try {
      const data = await fetchConcerts(endpoint);
      const list = document.createElement('ul');
      (data.results || data).forEach(function(concert){
        var li = document.createElement('li');
        li.textContent = concert.eventDateName + ' - ' + concert.venue;
        list.appendChild(li);
      });
      container.appendChild(list);
    } catch (err) {
      container.textContent = 'Failed to load concerts';
    }
  };
})();

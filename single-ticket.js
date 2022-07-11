// Schedule
function getSchedule(tags, buyLinkSource, filter, buttonType, showNextHome, liveButtons, customString) {
  const homeGames = [
    {
      gameCode: '20202020/TEMIND',
      ticketMasterId: '',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: '',
      refund: '',
      note: ''
    },{
      gameCode: '20211013/MEMIND',
      ticketMasterId: '05005B10EE0C3499',
      archticsId: '',
      dataFevoOfferId: '', 
      tags: '',
      customUtm: 'PREGM1',
      refund: '',
      note: 'Preseason'
    },{
      gameCode: '20211015/CLEIND',
      ticketMasterId: '05005B10EE10349D',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'PREGM2',
      refund: '',
      note: 'Preseason'
    },{
      gameCode: '20211023/MIAIND',
      ticketMasterId: '05005B10EE13349F',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM1',
      refund: '',
      note: ''
    },{
      gameCode: '20211025/MILIND',
      ticketMasterId: '05005B10EE1534A2',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM2',
      refund: '',
      note: ''
    },{
      gameCode: '20211030/TORIND',
      ticketMasterId: '05005B10EE1834A4',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'bhb',
      customUtm: 'GM3',
      refund: '',
      note: ''
    },{
      gameCode: '20211101/SASIND',
      ticketMasterId: '05005B10EE1A34B3',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'bhb',
      customUtm: 'GM4',
      refund: '',
      note: ''
    },{
      gameCode: '20211103/NYKIND',
      ticketMasterId: '05005B10EE1D34B6',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'city', // city
      customUtm: 'GM5',
      refund: '',
      note: ''
    },{
      gameCode: '20211113/PHIIND',
      ticketMasterId: '05005B10EE2034C9',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM6',
      refund: '',
      note: ''
    },{
      gameCode: '20211120/NOPIND',
      ticketMasterId: '05005B10EE2234E6',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'city', // city
      customUtm: 'GM7',
      refund: '',
      note: ''
    },{
      gameCode: '20211124/LALIND',
      ticketMasterId: '05005B10EE2534E9',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM8',
      refund: '',
      note: ''
    },{
      gameCode: '20211126/TORIND',
      ticketMasterId: '05005B10EE2834EB',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM9',
      refund: '',
      note: ''
    },{
      gameCode: '20211128/MILIND',
      ticketMasterId: '05005B10EE2B34FA',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'city', // city
      customUtm: 'GM10',
      refund: '',
      note: ''
    },{
      gameCode: '20211201/ATLIND',
      ticketMasterId: '05005B10EE2F34FC',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM11',
      refund: '',
      note: ''
    },{
      gameCode: '20211203/MIAIND',
      ticketMasterId: '05005B10EE333500',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM12',
      refund: '',
      note: ''
    },{
      gameCode: '20211206/WASIND',
      ticketMasterId: '05005B10EE353510',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM13',
      refund: '',
      note: ''
    },{
      gameCode: '20211208/NYKIND',
      ticketMasterId: '05005B10EE383521',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'city', // city
      customUtm: 'GM14',
      refund: '',
      note: ''
    },{
      gameCode: '20211210/DALIND',
      ticketMasterId: '05005B10EE3A3525',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'fam',
      customUtm: 'GM15',
      refund: '',
      note: ''
    },{
      gameCode: '20211213/GSWIND',
      ticketMasterId: '05005B10EE3E352A',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM16',
      refund: '',
      note: ''
    },{
      gameCode: '20211216/DETIND',
      ticketMasterId: '05005B10EE42352E',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'city, nightout', // city
      customUtm: 'GM17',
      refund: '',
      note: ''
    },{
      gameCode: '20211223/HOUIND',
      ticketMasterId: '05005B10EE473530',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM18',
      refund: '',
      note: ''
    },{
      gameCode: '20211229/CHAIND',
      ticketMasterId: '05005B10EE4B3533',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM19',
      refund: '',
      note: ''
    },{
      gameCode: '20211231/CHIIND',
      ticketMasterId: '05005B10EE4E3535',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM20',
      refund: '',
      note: ''
    },{
      gameCode: '20220105/BKNIND',
      ticketMasterId: '05005B10EE503538',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM21',
      refund: '',
      note: ''
    },{
      gameCode: '20220108/UTAIND',
      ticketMasterId: '05005B10EE53353C',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM22',
      refund: '',
      note: ''
    },{
      gameCode: '20220112/BOSIND',
      ticketMasterId: '05005B10EE553541',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'city', // city
      customUtm: 'GM23',
      refund: '',
      note: ''
    },{
      gameCode: '20220114/PHXIND',
      ticketMasterId: '05005B10EE583544',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'fam',
      customUtm: 'GM24',
      refund: '',
      note: ''
    },{
      gameCode: '20220126/CHAIND',
      ticketMasterId: '05005B10EE5B354E',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM25',
      refund: '',
      note: ''
    },{
      gameCode: '20220131/LACIND',
      ticketMasterId: '05005B10EE5E3556',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'nightout',
      customUtm: 'GM26',
      refund: '',
      note: ''
    },{
      gameCode: '20220202/ORLIND',
      ticketMasterId: '05005B10EE623559',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'city', // city
      customUtm: 'GM27',
      refund: '',
      note: ''
    },{
      gameCode: '20220204/CHIIND',
      ticketMasterId: '05005B10EE65355D',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM28',
      refund: '',
      note: ''
    },{
      gameCode: '20220211/CLEIND',
      ticketMasterId: '05005B10EE683563',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'fam',
      customUtm: 'GM29',
      refund: '',
      note: ''
    },{
      gameCode: '20220213/MININD',
      ticketMasterId: '05005B10EE6B3567',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM30',
      refund: '',
      note: ''
    },{
      gameCode: '20220216/WASIND',
      ticketMasterId: '05005B10EE6D3571',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'nightout',
      customUtm: 'GM31',
      refund: '',
      note: ''
    },{
      gameCode: '20220225/OKCIND',
      ticketMasterId: '05005B10EE703574',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM32',
      refund: '',
      note: ''
    },{
      gameCode: '20220227/BOSIND',
      ticketMasterId: '05005B10EE73357C',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM33',
      refund: '',
      note: ''
    },{
      gameCode: '20220308/CLEIND',
      ticketMasterId: '05005B10EE77357E',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM34',
      refund: '',
      note: ''
    },{
      gameCode: '20220315/MEMIND',
      ticketMasterId: '05005B10EE7A3592',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'twosday',
      customUtm: 'GM35',
      refund: '',
      note: ''
    },{
      gameCode: '20220320/PORIND',
      ticketMasterId: '05005B10EE7D3594',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'city, fam', // city
      customUtm: 'GM36',
      refund: '',
      note: ''
    },{
      gameCode: '20220323/SACIND',
      ticketMasterId: '05005B10EE803596',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'nightout',
      customUtm: 'GM37',
      refund: '',
      note: ''
    },{
      gameCode: '20220328/ATLIND',
      ticketMasterId: '05005B10EE84359B',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM38',
      refund: '',
      note: ''
    },{
      gameCode: '20220330/DENIND',
      ticketMasterId: '05005B10EE86359E',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'twosday',
      customUtm: 'GM39',
      refund: '',
      note: ''
    },{
      gameCode: '20220403/DETIND',
      ticketMasterId: '05005B10EE8935A3',
      archticsId: '',
      dataFevoOfferId: '',
      tags: 'city, fam', // city
      customUtm: 'GM40',
      refund: '',
      note: ''
    },{
      gameCode: '20220405/PHIIND',
      ticketMasterId: '05005B10EE8D35A5',
      archticsId: '',
      dataFevoOfferId: '',
      tags: '',
      customUtm: 'GM41',
      refund: '',
      note: ''
    },
  ]
  // fetch('https://data.nba.com/data/10s/v2015/json/mobile_teams/nba/2020/teams/pacers_schedule_02.json')
  fetch('https://data.nba.net/data/10s/v2015/json/mobile_teams/nba/2021/teams/pacers_schedule.json')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      let output = '';
      let dataObj = data.gscd.g;
      function merge(o) {
        let temp;
        if (map.has(o.gcode)) {
            Object.assign(map.get(o.gameCode), o);
            return;
        }
        temp = Object.assign({}, o);
        map.set(temp.gcode, temp);
        result.push(temp);
      }
      map = new Map,
      result = [];
      [dataObj, homeGames].forEach(function (a) {
          a.forEach(merge);
      });
      result.splice(-1);
      result.forEach(function(game) {
        console.log(game);
        if (game.h.ta == 'IND') {
          function dateToEuro(euro) {
            var d = euro.getDate() + 1;
            var y = euro.getFullYear().toString().substr(-2);
            var m = euro.getMonth() + 1;
            if (d < 10) { d = '0' + d; }
            if (m < 10) { m = '0' + m; }
            return y + '' + m  + '' + d;
          }
          function dateToYMD(date) {
            var monArray=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var dayArray=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var dy = dayArray[date.getDay()];
            var d = date.getDate();
            var m = monArray[date.getMonth()];
            var y = date.getFullYear();
            var h = date.getHours();
            var min = date.getMinutes();
            var ap = "AM";
            if (h > 11) { ap = "PM"; }
            if (h > 12) { h = h - 12; }
            if (h == 0) { h = 12; }
            var zp = function (val){
                return (val <= 9 ? '0' + val : '' + val);
            }
            return dy + ', ' + m  + ' ' + d + ', ' + y + '<br> at ' + h + ':' + zp(min) + ap;
          }
          function dateToDateOnly(date) {
            var monArray=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var dayArray=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var dy = dayArray[date.getDay() + 1];
            var d = date.getDate() + 1;
            var m = monArray[date.getMonth()];
            var y = date.getFullYear();
            return dy + ', ' + m  + ' ' + d + ', ' + y + '<br>Time to be determined';
          }
          function shortDate(date) {
            var monArray=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var d = date.getDate();
            var m = monArray[date.getMonth()];
            var y = date.getFullYear();
            return m  + ' ' + d + ', ' + y;
          }
          let refundTag;
          if(game.refund !== undefined && game.refund !== '') {
            refundTag = ' | <a href="' + game.refund + '">Refund Info</a>';
          }
          let date,
              ppdStatus,
              origDate,
              newStatus;
          if(game.ppdst === 'I') {
            if (game.etm === 'TBD' && game.gdte !== '') {
              date = dateToDateOnly(new Date(game.gdte));
            } else if (game.etm === 'TBD' && game.gdte === 'TBD') {
              date = 'Date and time to be determined';
            } else {
              date = dateToYMD(new Date(game.etm));
            }
          } else if (game.ppdst === 'A') {
            if (game.ppd.new.etm === 'TBD') {
              ppdStatus = `<strong>POSTPONED</strong>${refundTag ? refundTag : ''}<br>`;
              date = 'New date and time to be determined'
            } else {
              origDate = shortDate(new Date(game.ppd.orig.gdte));
              ppdStatus = `<strong>UPDATED TIME (Postponed from ${origDate})</strong>${refundTag ? refundTag : ''}<br>`;
              date = dateToYMD(new Date(game.ppd.new.etm));
              newStatus = 'clear';
            }
          }
          let euro = dateToEuro(new Date(game.gdte));
          if(game.v !== undefined) {
            gamePreview = ' | <a href="/pacers/preview-pacers-' + game.v.tn.toLowerCase() + '-' + euro + '">Preview</a>';
          }
          let preDate = new Date(); 
          let currDate = new Date(preDate.getTime() - (preDate.getTimezoneOffset() * 60000)).toISOString();
          let cityTag,
              cityClass;
          if(game.tags !== undefined && game.tags.includes('city')) {
            cityTag = ' | <strong><a href="https://pacers.com/city">City Edition Game</a></strong>';
            cityClass = ' city';
          } 
          // console.log(game.etm + ': ' + game.tags);
          if (((currDate < game.etm && game.as === 'IN') || (game.ppdst === 'A' && game.as === 'IN' && game.ppd.new.etm === 'TBD') || (game.ppdst === 'A' && game.as === 'IN' && currDate < game.ppd.new.etm)) && (game.tags.includes(tags))) { 
            output += `<div class="game${cityClass ? cityClass : ''}${game.ppdst ? ' ppd'+game.ppdst : ''}${newStatus ? newStatus : ''}" data-game-id="${game.gid}" data-archtics-id="${game.archticsId}" data-ticketmaster-id="${game.ticketMasterId}"><a href="/${game.v.tn.toLowerCase()}" target="_blank"><img src="https://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_80x64/${game.v.ta.toLowerCase()}.gif" alt="${game.v.tc} ${game.v.tn}"></a><div class="info"><strong class="teamName">${game.v.tc} ${game.v.tn} (${game.v.re})</strong><br>${ppdStatus ? ppdStatus : ''}${date}${game.note ? ' &middot; ' + game.note : ''}${cityTag ? cityTag : ''}${refundTag ? refundTag : ''}</div><div class="btn-contain">`;
            if(game.ticketMasterId && buttonType === 'TicketMaster' && liveButtons === true && customString === false) {  
              output += `<a href="https://www.ticketmaster.com/event/${game.ticketMasterId}?brand=pacers&camefrom=${buyLinkSource}"  target="_blank" role="button">Find Tickets</a>`;

              //2019 -> https://www.ticketmaster.com/${game.h.tc.toLowerCase()}-${game.h.tn.toLowerCase()}-v-${game.v.tc.replace(/\s+/g, '-').toLowerCase()}-${game.v.tn.toLowerCase()}/event/${game.ticketMasterId}?brand=pacers&camefrom=${buyLinkSource}

            } else if (game.ticketMasterId && buttonType === 'TicketMaster' && liveButtons === true && customString === true) {
              output += `<a href="https://www.ticketmaster.com/event/${game.ticketMasterId}?brand=pacers&wt.mc_id=NBA_TEAM_IND_SINGLE_GM_TIX_PG_${game.customUtm}&utm_source=NBA.com&utm_medium=client&utm_campaign=NBA_TEAM_IND&utm_content=SINGLE_GM_TIX_PG_${game.customUtm}&camefrom=${buyLinkSource}"  target="_blank" role="button">Find Tickets</a>`;

              //2019 -> https://ticketmaster.com/event/${game.ticketMasterId}?brand=pacers&artistid=805952&wt.mc_id=${buyLinkSource}&utm_source=NBA.com&utm_medium=client&utm_campaign=NBA_TEAM_IND&utm_content=${game.customUtm}

            } else if (game.dataFevoOfferId && buttonType === 'DataFevo' && liveButtons === true) {
              output += `<button type="button" data-fevo-offer-id="${game.dataFevoOfferId}">Reserve Tickets</button>`;
            } else {
              // if no button, show broadcast box
              // pulls broadcast for home channels
              // output += `<div class="ent noavail">Public ticket sales are not yet available for this game</div>`;
              const obj = game.bd.b;
              let entType,
                  entDisp;
              obj.forEach(function(ent) {
                if(ent.scope === 'natl' || ent.scope === 'home') {
                  entType = ent.type;
                  entDisp = ent.disp;
                  output += `<div class="ent"><strong>${entType}: </strong> ${entDisp}</div>`;
                }
              });
            }
            output += `</div></div>`;
          }
        }
      });
      document.getElementById('getSchedule').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
    // filter
    if(filter === true) {
      const custSched = document.getElementById('getSchedule');
      const custFilter = document.createElement('div');
      custFilter.innerHTML = '<span>Filter games: </span><input type="text" id="getSchedule-filter" placeholder="examples: Celtics, Wednesday, January, 7:00"><span class="badge bg-dark" id="clearResults">Clear</span>';
      custFilter.className = 'getSchedule-container';
      custSched.parentNode.insertBefore(custFilter, custSched);

      const filterError = document.createElement('div');
      filterError.innerHTML = `There are no matches. Please broaden your search.`;
      filterError.className = 'custError';
      custSched.parentNode.insertBefore(filterError, custSched);

      const clearResults = document.getElementById('clearResults');
      const filter = document.getElementById('getSchedule-filter');
      function filterTasks(e) {
        const text = e.target.value.toLowerCase();
        let count = 0;
        document.querySelectorAll('.game').forEach(function(team, index){
          const item = team.children[1].textContent;
          if(item.toLowerCase().indexOf(text) != -1) {
            team.style.display = 'flex';
            count++;
          } else {
            team.style.display = 'none';
          }
          if(count == 0) {
            filterError.style.display = 'flex';
          } else {
            filterError.style.display = 'none';
          }

          if(count <= index) {
            custFilter.classList.add('filtered');
            custSched.classList.add('filtered');
          } else {
            custFilter.classList.remove('filtered');
            custSched.classList.remove('filtered');
          }
        });
      }
      function clearFilter(e) {
        count = 0;
        console.log(filter);
        filter.value = '';
        document.querySelectorAll('.game').forEach(function(team, index){
          team.style.display = 'flex';
          filterError.style.display = 'none';
          custFilter.classList.remove('filtered');
          custSched.classList.remove('filtered');
        });
      }
      // event listener for filter tasks
      filter.addEventListener('keyup', filterTasks);
      clearResults.addEventListener('click', clearFilter);
    }
    // show Next Home Game Style
    if(showNextHome === true) {
      const custSched = document.getElementById('getSchedule');
      custSched.classList.add('nextHome');
    }
}
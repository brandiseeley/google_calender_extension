/* eslint-disable max-lines-per-function */
console.log('script loaded');

function allTimeZones() {
  let list = document.querySelector('ul.VfPpkd-rymPhb.r6B9Fd.bwNLcf.P2Hi5d.VfPpkd-OJnkse.Pl5J1c');
  if (!list) return [];

  let timeZones = list.querySelectorAll('li[role="option"]');
  return timeZones;
}

function matchingOptions(text, options) {
  text = text.trim().toLowerCase();
  return [...options].filter(option => {
    return option.getAttribute('aria-label').toLowerCase().includes(text);
  });
}

document.addEventListener('click', event => {
  let button = event.target.closest('#yDmH0d > div.VfPpkd-Sx9Kwc.cC1eCc.UDxLd.PzCPDd.CTxAtc.RQS0nc.CQHNZc.VfPpkd-Sx9Kwc-OWXEXe-FNFY6c > div.VfPpkd-wzTsW > div > div.VfPpkd-cnG4Wd > div > div > div > div:nth-child(1) > div > div');
  if (!button) return;
  console.log('Time zones opened.');

  // TODO: This is the correct selector, but the element hasn't been created
  //       yet when we try to select it. Write function to try selecting it
  //       and retry finite times after delay.
  let div = document.querySelector('#yDmH0d > div.VfPpkd-Sx9Kwc.cC1eCc.UDxLd.PzCPDd.CTxAtc.RQS0nc.CQHNZc.VfPpkd-Sx9Kwc-OWXEXe-FNFY6c > div.VfPpkd-wzTsW > div > div.VfPpkd-cnG4Wd > div > div > div > div:nth-child(1) > div > div > div.VfPpkd-xl07Ob-XxIAqe.VfPpkd-xl07Ob-XxIAqe-OWXEXe-qbOKL.VfPpkd-xl07Ob.VfPpkd-YPmvEd.s8kOBc.dmaMHc.d04Lt.dzaSm.VfPpkd-xl07Ob-XxIAqe-OWXEXe-uxVfW-FNFY6c-uFfGwd.VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c');

  let searchBar = document.createElement('input');
  searchBar.setAttribute('type', 'text');

  div.prepend(searchBar);
  searchBar.addEventListener('input', () => {
    console.log('Change event firing...');
    let searchText = searchBar.value;
    console.log('Searching to match: ', searchText);
    let options = allTimeZones();
    console.log('All timezones length: ', options.length);
    let matchingTimeZones = matchingOptions(searchText, options);
    console.log('Timezones matching text length: ', matchingTimeZones.length);

    options.forEach(option => {
      option.style.display = 'none';
    });

    matchingTimeZones.forEach(option => {
      option.style.display = 'flex';
    });
  });

  searchBar.focus();
  searchBar.select();
});
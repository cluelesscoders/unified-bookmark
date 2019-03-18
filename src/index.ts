import Chrome from './browsers/chrome';

(async() => {
  const chr = new Chrome();

  console.log(await chr.getLastActiveProfile());
})();

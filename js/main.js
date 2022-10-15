
// start loading screen (PRELOADER)
const setup = () => {
  function getSidebarStateFromLocalStorage() {
    // if it already there, use it
    if (window.localStorage.getItem("isSidebarOpen")) {
      return JSON.parse(window.localStorage.getItem("isSidebarOpen"));
    }

    // else return the initial state you want
    return false;
  }

  function setSidebarStateToLocalStorage(value) {
    window.localStorage.setItem("isSidebarOpen", value);
  }

  return {
    loading: true,
    isSidebarOpen: getSidebarStateFromLocalStorage(),
    toggleSidbarMenu() {
      this.isSidebarOpen = !this.isSidebarOpen;
      setSidebarStateToLocalStorage(this.isSidebarOpen);
    },
    isSettingsPanelOpen: false,
    isSearchBoxOpen: false,
  };
};




  // flat  button
  $('.action-button').on('click', function(){
    $('#overlay').toggleClass('show');
    $(this).toggleClass('active');
  });

  // add active colorto aside navbar
  $('.actinThis').on('click', function(){
    $(this).addClass('activeBackground');
  });

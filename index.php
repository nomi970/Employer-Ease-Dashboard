








<?php
$current_url = $_SERVER['REQUEST_URI'];
?>

<aside class="dashbord-1">
    <div class="sidebar">
        <i class="fas fa-chevron-left align-items-center justify-content-center text-white" id="right-arrow"></i>
        <div class="logo-img">
            <a href="index.html" class="text-decoration-none">
                <img src="assets/images/employer-ease-pics/main-logo.svg" alt="logo-img" />
            </a>
        </div>
        <div class="dashbord-menu">
            <div class="border border-top-0 border-end-0 py-2 px-3 border-r-8 border-start-0 special-tab-bg">
                <p class="ps-3 text-white j_family fs_16 fw_600">Ground Control Plan</p>
            </div>
            <a class="nav-item custom-nav-item align-items-center <?php echo (strpos($current_url, 'index.html') !== false) ? 'active' : ''; ?>" href="index.html">
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5V10C10 10.2652 9.89464 10.5196 9.70711 10.7071C9.51957 10.8946 9.26522 11 9 11H5C4.73478 11 4.48043 10.8946 4.29289 10.7071C4.10536 10.5196 4 10.2652 4 10V5ZM14 5C14 4.73478 14.1054 4.48043 14.2929 4.29289C14.4804 4.10536 14.7348 4 15 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V7C20 7.26522 19.8946 7.51957 19.7071 7.70711C19.5196 7.89464 19.2652 8 19 8H15C14.7348 8 14.4804 7.89464 14.2929 7.70711C14.1054 7.51957 14 7.26522 14 7V5ZM4 16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15H9C9.26522 15 9.51957 15.1054 9.70711 15.2929C9.89464 15.4804 10 15.7348 10 16V19C10 19.2652 9.89464 19.5196 9.70711 19.7071C9.51957 19.8946 9.26522 20 9 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V16ZM14 13C14 12.7348 14.1054 12.4804 14.2929 12.2929C14.4804 12.1054 14.7348 12 15 12H19C19.2652 12 19.5196 12.1054 19.7071 12.2929C19.8946 12.4804 20 12.7348 20 13V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H15C14.7348 20 14.4804 19.8946 14.2929 19.7071C14.1054 19.5196 14 19.2652 14 19V13Z" stroke="#6F7784" stroke-width="2" />
                    </svg>
                </span>
                <h2>KPI Dashboard</h2>
            </a>

            <div class="accordion nav-item custom-nav-item" id="accordionExample">
                <div class="accordion-item w-100">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div class="nav-item custom-nav-item">
                                <span>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5 11H6.7C5.57989 11 5.01984 11 4.59202 11.218C4.21569 11.4097 3.90973 11.7157 3.71799 12.092C3.5 12.5198 3.5 13.0799 3.5 14.2V21M21.5 21V6.2C21.5 5.0799 21.5 4.51984 21.282 4.09202C21.0903 3.71569 20.7843 3.40973 20.408 3.21799C19.9802 3 19.4201 3 18.3 3H14.7C13.5799 3 13.0198 3 12.592 3.21799C12.2157 3.40973 11.9097 3.71569 11.718 4.09202C11.5 4.51984 11.5 5.0799 11.5 6.2V21M22.5 21H2.5M15 7H18M15 11H18M15 15H18" stroke="#6F7784" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <h2 class="pe-4">Digital Presence</h2>
                            </div>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse <?php echo (strpos($current_url, 'domains.html') !== false || strpos($current_url, 'brandingKits.html') !== false || strpos($current_url, 'LandingPage.html') !== false || strpos($current_url, 'PrintShop.html') !== false) ? 'show' : ''; ?>" data-bs-parent="#accordionExample mb-0 pb-0">
                        <div class="accordion-body mb-0 pb-0">
                            <ul class="mb-0 pb-0 list-unstyled">
                                <li class="list-unstyled">
                                    <a href="domains.html" class="dropdown-item text-decoration-none text-start side-bar-drop-down p-2 <?php echo (strpos($current_url, 'domains.html') !== false) ? 'active' : ''; ?>">Domains</a>
                                    <a href="brandingKits.html" class="dropdown-item text-decoration-none text-start side-bar-drop-down pt-3 p-2 <?php echo (strpos($current_url, 'brandingKits.html') !== false) ? 'active' : ''; ?>">Logo + Branding Kits</a>
                                    <a href="LandingPage.html" class="dropdown-item text-decoration-none text-start side-bar-drop-down pt-3  p-2 <?php echo (strpos($current_url, 'LandingPage.html') !== false) ? 'active' : ''; ?>">Website + Landing Pages</a>
                                    <a href="PrintShop.html" class="dropdown-item text-decoration-none text-start side-bar-drop-down pt-3 p-2 <?php echo (strpos($current_url, 'PrintShop.html') !== false) ? 'active' : ''; ?>">Print Shop</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Repeat the same logic for other links and submenus -->
            <!-- Example for another link -->
            <a class="nav-item custom-nav-item <?php echo (strpos($current_url, 'communication-center.html') !== false) ? 'active' : ''; ?>" href="communication-center.html">
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.21296 14.5C9.52517 15.0945 10.1486 15.5 10.8667 15.5H13C14.1046 15.5 15 14.6046 15 13.5C15 12.3954 14.1046 11.5 13 11.5H11C9.89543 11.5 9 10.6046 9 9.49999C9 8.39542 9.89543 7.49999 11 7.49999H13.1333C13.8514 7.49999 14.4748 7.90549 14.787 8.49999M12 5.99999V7.49999M12 15.5V17M20 12C20 16.9084 14.646 20.4784 12.698 21.6149C12.4766 21.744 12.3659 21.8086 12.2097 21.8421C12.0884 21.8681 11.9116 21.8681 11.7903 21.8421C11.6341 21.8086 11.5234 21.744 11.302 21.6149C9.35396 20.4784 4 16.9084 4 12V7.21759C4 6.41808 4 6.01833 4.13076 5.6747C4.24627 5.37113 4.43398 5.10027 4.67766 4.88552C4.9535 4.64243 5.3278 4.50207 6.0764 4.22134L11.4382 2.21067C11.6461 2.13271 11.75 2.09373 11.857 2.07827C11.9518 2.06457 12.0482 2.06457 12.143 2.07827C12.25 2.09373 12.3539 2.13271 12.5618 2.21067L17.9236 4.22134C18.6722 4.50207 19.0465 4.64243 19.3223 4.88552C19.566 5.10027 19.7537 5.37113 19.8692 5.6747C20 6.01833 20 6.41808 20 7.21759V12Z" stroke="#6F7784" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
                <h2>Digital Comms</h2>
            </a>

            <!-- Repeat for other links and submenus -->
        </div>
    </div>
</aside>
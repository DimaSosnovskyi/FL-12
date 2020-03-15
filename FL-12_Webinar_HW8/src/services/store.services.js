import React from 'react';

export const pages = {
    main: 'main',
    add: 'add',
    edit: 'edit'
}

export const StoreContext = React.createContext({
    currentPage: pages.main,
    goToPage() {
        console.log(StoreContext);
    }
});
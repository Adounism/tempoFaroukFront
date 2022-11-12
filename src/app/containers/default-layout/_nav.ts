import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Contacts'
  },
  {
    name: 'Gestion Client',
    url: '/base/listcustomers',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Gestion Fournisseur',
    // url: '/base/suppliers',
    url: '/base/listsuppliers',
    iconComponent: { name: 'cil-bookmark' }
  },
  {
    name: 'Opérations',
    title: true
  },
  {
    name: 'Tranfert Crédit',
    iconComponent: { name: 'cil-share' },
    children: [
      {
        name: 'Ajouter Transaction',
        url: '/base/addtransaction'
      },

      {
        name: 'Liste transaction',
       url: '/base/transaction'
      },

      {
        name: 'Liste Operation',
        url: '/base/operation'
      },

      // {
      //   name: 'Edit customer',
      //   url: '/base/editcustomer/:id'
      // },
      // {
      //   name: 'Liste des transactions',
      //   url: '/base/breadcrumbs'
      // },
      // {
      //   name: 'Historique clients',
      //   url: '/base/historique'
      // },

      // {
      //   name: 'Collapse',
      //   url: '/base/collapse'
      // },
      // {
      //   name: 'List Group',
      //   url: '/base/list-group'
      // },
      // {
      //   name: 'Pagination',
      //   url: '/base/pagination'
      // },

      // {
      //   name: 'Popovers',
      //   url: '/base/listeachats'
      // },

      // {
      //   name: 'Spinners',
      //   url: '/base/spinners'
      // },
      // {
      //   name: 'Tables',
      //   url: '/base/tables'
      // },
      // {
      //   name: 'Tabs',
      //   url: '/base/tabs'
      // },
      // {
      //   name: 'Tooltips',
      //   url: '/base/tooltips'
      // }
    ]
  },
  {
    name: 'Achat',
    url: '/buttons',
    iconComponent: { name: 'cil-dollar' },
    children: [

      {
        name: 'Liste des Achats',
        url: '/base/listeachats'
      },

       {
        name: 'Ajouter un achat',
        url: '/base/addpurchase'
      },
      // {
      //   name: 'Dropdowns',
      //   url: '/buttons/dropdowns'
      // },
    ]
  },
  {
    name: 'Rapports',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Historique des transactions',
        url: '/forms/form-control'
      },
      {
        name: 'Historique des achats',
        url: '/forms/select'
      },
      // {
      //   name: 'Checks & Radios',
      //   url: '/forms/checks-radios'
      // },
      // {
      //   name: 'Range',
      //   url: '/forms/range'
      // },
      // {
      //   name: 'Input Group',
      //   url: '/forms/input-group'
      // },
      // {
      //   name: 'Floating Labels',
      //   url: '/forms/floating-labels'
      // },
      // {
      //   name: 'Layout',
      //   url: '/forms/layout'
      // },
      // {
      //   name: 'Validation',
      //   url: '/forms/validation'
      // }
    ]
  },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   iconComponent: { name: 'cil-chart-pie' }
  // },
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE'
  //       }
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/icons/flags'
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/icons/brands'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   iconComponent: { name: 'cil-bell' },
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges'
  //     },
  //     {
  //       name: 'Modal',
  //       url: '/notifications/modal'
  //     },
  //     {
  //       name: 'Toast',
  //       url: '/notifications/toasts'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //     }
  //   ]
  // },
];

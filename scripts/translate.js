const translations = {
  en: {
    Welcome_to_Hodoom_Store: "Welcome to Hodoom Store!",
    Access_your_account_and_descover_the_luxury: "Access your account <br> and descover the luxury",
    Start_your_journey_of_luxury_and_sophistication: "Start your journey  <br>  of luxury and sophistication",
    Email_address: 'Email address',
    Password : 'Password',
    Forget_You_Password : 'Forget You Password ?',
    Remember_me : 'Remember me',
    Login : 'Login',
    Create_New_Account : 'Create New Account',
    Enter_email : 'Enter email',
    Enter_password : 'Enter password',
    First_Name : 'First Name',
    Enter_First_Name : 'Enter First Name',
    Last_Name : 'Last Name',
    Enter_Last_Name : 'Enter Last Name',
    Phone : 'Phone',
    Enter_phone : 'Enter phone',
    Sign_in : 'Sign in',
    Already_have_an_account : 'Already have an account',
    Home : 'Home',
    Men_Collection : 'Men Collection',
    Women_Collection : 'Women Collection',
    Kids_Collection : 'Kids Collection',
    Offers : 'Offers',
    New_arrival : 'New arrival',
    New_Items : 'New Items',
    New : 'New',
    Sale : 'Sale',
    Sizes : 'Sizes',
    Quick_Add : 'Quick Add',
    See_All : 'See All',
    Important_links : 'Important links',
    Home : 'Home',
    Categories : 'Categories',
    New_Arrival : 'New Arrival',
    Contact_Us : 'Contact Us',
    facebook : 'facebook',
    instagram : 'instagram',
    Follow_Us: 'Follow Us',
    Get_in_touch : 'Get in touch',
    Colors : 'Colors',
    Shopping_Cart : 'Shopping Cart',
    items : 'items',
    Quantity : 'Quantity',
    Color : 'Color',
    Edit_Cart_Item : 'Edit Cart Item',

  },
  ar: {
      Welcome_to_Hodoom_Store: "مرحبًا بك في هدووم استور!",
      Access_your_account_and_descover_the_luxury: "قم بالدخول إلى حسابك <br> واكتشف الفخامة",
      Start_your_journey_of_luxury_and_sophistication: "ابدأ رحلتك للفخامة والرقي",
      Email_address: 'البريد الألكتروني',
      Password : 'كلمة المرور',
      Forget_You_Password : 'نسيت كلمة المرور ؟',
      Remember_me : 'تذكرني',
      Login : 'تسجيل دخول',
      Create_New_Account : 'إنشاء حساب جديد',
      Enter_email : 'أدخل البريد الألكتروني',
      Enter_password : 'أدخل كلمة المرور',
      First_Name : 'الأسم الأول',
      Enter_First_Name : 'أدخل الأسم الأول',
      Last_Name : 'الأسم الأخير',
      Enter_Last_Name : 'أدخل الأسم الأخير',
      Phone : 'رقم الهاتف',
      Enter_phone : 'أدخل رقم الهاتف',
      Sign_in : 'إنشاء حساب',
      Already_have_an_account : 'تمتلك حساب بالفعل',
      Home : 'الصفحة الرئيسية',
      Men_Collection : 'كوليكشن رجالي',
      Women_Collection : 'كوليكسن حريمي',
      Kids_Collection : 'كوليكشن أطفالي',
      Offers : 'العروض',
      New_arrival : 'مضاف حديثًا',
      New_Items : 'منتجات جديدة',
      New : 'جديد',
      Sale : 'خصم',
      Sizes : 'المقاسات',
      Quick_Add : 'إضافة',
      See_All : 'رؤية الكل',
      Important_links : 'صفحاتنا الاساسية ',
      Categories : 'الأصناف',
      New_Arrival : 'مضاف حديثًا',
      Contact_Us : 'تواصل معنا',
      Follow_Us: 'تابعنا',
      Get_in_touch : 'راسلنا',
      Colors : 'الألوان',
      Shopping_Cart : 'صندوق المشتريات',
      items : 'منتجات',
      Quantity : 'الكمية',
      Color : 'اللون',
      Edit_Cart_Item : 'تعديل منتج في صندوق المشتريات',
  },

};

$(document).on('click', '#lang-icon', function() {
  var currentLang = localStorage.getItem('language') || 'en';
  var newLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('language', newLang);
  updateLanguage(newLang);
});
$(document).on('click', '.lang-icon', function() {
  var currentLang = localStorage.getItem('language') || 'en';
  var newLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('language', newLang);
  updateLanguage(newLang);
});

function updateLanguage(lang) {
  if (lang === 'ar') {
      $('body').attr('dir', 'rtl');
      $('body').css('font-family', 'vexa');
      $('.item-header-text').css('text-align','-webkit-left')
      // Update other texts and elements for Arabic
    } else {
      $('body').attr('dir', 'ltr');
      $('body').css('font-family', '"gothic", "Quicksand", sans-serif');
      $('.item-header-text').css('text-align','-webkit-right')
      // Update other texts and elements for English
  }
  $('[data-lang]').each(function() {
      var key = $(this).data('lang');
      $(this).html(translations[lang][key]);
  });
  $('[data-placeholder]').each(function() {
      var key = $(this).data('placeholder');
      $(this).attr('placeholder', translations[lang][key]);
  });
  $('input[type="tel"]').css('text-align', lang === 'ar' ? 'right' : 'left');
}

$(document).ready(function() {
  var savedLang = localStorage.getItem('language') || 'en'; 
  updateLanguage(savedLang);
});

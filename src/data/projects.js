// Every project on the site: pulled from GitHub READMEs plus the curated list.
// Shared by the classic Projects page and the Twilight pages, so there is one source of truth.
import pulledProjects from "data/pulledProjects.json";

// Projects pulled from GitHub READMEs by scripts/pull-projects.js (npm run pull:projects).
export const PULLED = pulledProjects.map((p) => ({ ...p, image: require("assets/img/pulled/" + p.image) }));

// One entry per project. `category` is "ai", "ml" or "web" (web + mobile) and drives the filter tabs.
// Within a category the order here is the order shown; the "All" view follows the FILTERS order below.
export const PROJECTS = [
    ...PULLED,
    { id: "lbmMobile", category: "web", image: require("assets/img/lbm-all.webp"), title: "Literature, Books and Movies (LBM)", description: "Native Android app that uses theMovieDB API to display movies and books data.", href: "https://play.google.com/store/apps/details?id=com.single.arnavkaushal.book_client_app" },
    { id: "forkifyWeb", category: "web", image: require("assets/img/forkify-all.webp"), title: "Forkify Recipes", description: "A Food recipe web app utilizing node modules, webpack and babel employing RESTful web services to render data from the forkify food recipe API", href: "https://arnavk2319.github.io/Forkify-Recipe-App/" },
    { id: "mapFinderMobile", category: "web", image: require("assets/img/mapfinder-all.webp"), title: "Location Finder", description: "Native Android Map App whcih uses GCP's Directions API, Places API AND Maps SDK", href: "https://play.google.com/store/apps/details?id=com.arnav.akapplications.mapfinder" },
    { id: "dabShopWeb", category: "web", image: require("assets/img/dab.webp"), title: "DAB E-commerce Shop", description: "An E-commerce website that allows users to buy different kind of alcohol products in minutes, from a variety of products from beer, spirits, wine, coolers and liquor products.", href: "https://shop.dialabottle.ca/dial-a-bottle" },
    { id: "covidMobile", category: "web", image: require("assets/img/coviupdate-all.webp"), title: "CoviUpdate", description: "A Covid-19 Flutter app that informs the user on different aspects of the pandemic, from news, different types of case counts to the vaccines available.", href: "https://github.com/arnavk2319/Flutter-Covid-19-App" },
    { id: "ppeProtectWeb", category: "web", image: require("assets/img/ppeprotect.webp"), title: "PPE Protect", description: "An E-commerce Shopify website that allows a user to purchase a variety of PPE products to help protect against the global Covid-19 pandemic.", href: "https://www.ppeprotect.ca/" },
    { id: "shopsMobile", category: "web", image: require("assets/img/shop.webp"), title: "Generic Shop", description: "A shop mobile app made using Google's SDK Flutter and RESTful APIs to render data using CRUD ops", href: "https://github.com/arnavk2319/Shop-App-Flutter" },
    { id: "equoWeb", category: "web", image: require("assets/img/equo-all.webp"), title: "Equo", description: "A brochure website that invites entrepreneurs to join a global venture and get updated about informed investment choices, all suited to each entreprenuer's different profile", href: "https://equoshift.com/" },
    { id: "mealsMobile", category: "web", image: require("assets/img/meal-planner.webp"), title: "Meal Planner", description: "A Flutter app that utilizes RESTful APIs and CRUD ops to allow the user to monitor their diets in terms of segregating their food portions into calories, nutrients and portion sizes", href: "https://github.com/arnavk2319/Meals-Flutter-App" },
    { id: "kovaWeb", category: "web", image: require("assets/img/kova-all.webp"), title: "Kova Social and Beauty", description: "A business website that invites and allows users to try beauty products and processes", href: "https://kovasocialbeauty.com/" },
    { id: "loanDefPred", category: "ml", image: require("assets/img/loan-default-pred.webp"), title: "Loan Default Prediction - LogisticR and RandomF", description: "A data model that is trained on binary classification using Random Forests and Logistic Regression to predict a loan default", href: "https://www.kaggle.com/code/arnavkaushal/loan-default-prediction-logisticr-and-randomf/" },
    { id: "supervised-learning-comparison", category: "ml", image: require("assets/img/super-learn.webp"), title: "Supervised learning algorithms - Comparison", description: "A comparison of supervised learning algorithms; K-Nearest neightbours(KNN), Support Vector Machines(SVM), Decision Trees, etc", href: "https://www.kaggle.com/code/arnavkaushal/supervised-learning-algorithms-comparison" },
    { id: "unsupervised-learning-comparison", category: "ml", image: require("assets/img/unsuper-learn.webp"), title: "Unsupervised learning algorithms - Comparison", description: "A comparison of unsupervised learning algorithms; K-Means, Gaussian Mixture Models(GMM), Mean Shift Clustering, DSBScan etc", href: "https://www.kaggle.com/code/arnavkaushal/unsupervised-learning-comparison" },
    { id: "insurance-prediction-comparison", category: "ml", image: require("assets/img/insurance-pred-img.webp"), title: "Insurance Claim Precition - LogisticR and RandomFor", description: "A data model that is trained on binary classification using Random Forests and Logistic Regression to predict an insurance claim", href: "https://www.kaggle.com/code/arnavkaushal/insurance-claim-prediction-logisticr-and-randfor" },
    { id: "cali-housing-comparison", category: "ml", image: require("assets/img/cali-housing-img.webp"), title: "California Housing Dataset - EDA, Linear, Ridge, Lasso Regression", description: "A data model that is trained on different kinds of regression like linear, polynomial, ridge, lasso etc and compare each model performance", href: "https://www.kaggle.com/code/arnavkaushal/california-housing-eda-linear-ridge-lasso" }
];

// Section order = tab order = order of groups in "All". A tab with no projects is hidden, so the
// "AI & RAG" tab appears as soon as its first project is added to PROJECTS.
export const FILTERS = [
    { key: "all", label: "All Categories", heading: "My Projects" },
    { key: "ai", label: "AI & RAG", heading: "My AI & RAG Projects" },
    { key: "ml", label: "ML & Data Science", heading: "My ML & Data Science Projects" },
    { key: "web", label: "Web & Mobile", heading: "My Web & Mobile Projects" },
];
export const SECTION_ORDER = FILTERS.slice(1).map((f) => f.key);

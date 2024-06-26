document.addEventListener('DOMContentLoaded', function () {
    import('../modules/footer.js');
    import('../modules/menu.js')
    let trigger = document.querySelector('#ourstory');
    let animation = document.querySelector('.img-items');
    let animationtwo = document.querySelector('.img-items-2');
    let productContainer = document.querySelector('.products-container');
    let recipesContainer = document.querySelector('.recipes-container');
    let allproductsBtn = document.querySelector('#allproducts-btn');
    let buttonsLinks = {
        products: document.querySelector('#products-link'),
        recipes: document.querySelector('#recipes-link'),
        about: document.querySelector('#about-link'),
        contacts: document.querySelector('#contacts-link')
    }
    let categories = {
        allproducts: document.querySelector('#allproducts'),
        seasonings: document.querySelector('#seasonings'),
        spices: document.querySelector('#spices'),
        peppers: document.querySelector('#peppers'),
        herbs: document.querySelector('#herbs'),
        supplements: document.querySelector('#supplements'),
        horeca: document.querySelector('#horeca'),
        breakfast: document.querySelector('#breakfast'),
        soups: document.querySelector('#soups'),
        hotdishes: document.querySelector('#hotdishes'),
        salads: document.querySelector('#salads'),
        preparations: document.querySelector('#preparations'),
        bakery: document.querySelector('#bakery'),
        drinks: document.querySelector('#drinks')
    }
    
    let variables = {
        fifty: document.querySelector('#fiftygr'),
        thousand: document.querySelector('#thousandgr')
    }
    
    if (variables.fifty && variables.thousand) {
        let weightNone = document.querySelectorAll('.weight-none');
        let weightImg = document.querySelectorAll('.weight-img')

        variables.thousand.addEventListener('click', () => {
            weightNone.forEach((wnone) => {
                wnone.classList.remove('weight-none')
            })
            weightImg.forEach((wimg) => {
                wimg.style.display = 'none'
            })
        })
        
        variables.fifty.addEventListener('click', () => {
            weightNone.forEach((wnone) => {
                wnone.classList.add('weight-none')
            })
            weightImg.forEach((wimg) => {
                wimg.style.display = 'block';
            })
        })
        
        let frameImage = document.querySelector('.product-item img');

        let mainImage = document.querySelector('.main-image img');
        let noMainImage = document.querySelector('.nomain-image img');
    }
    
    buttonsLinks.about.addEventListener("click", function () {
        var targetUrl = window.location.origin + "/about";
        window.location.href = targetUrl;
    });

    buttonsLinks.products.addEventListener("click", function () {
        var targetUrl = window.location.origin + "/products";
        window.location.href = targetUrl;
    });

    buttonsLinks.recipes.addEventListener("click", function () {
        var targetUrl = window.location.origin + "/recipes";
        window.location.href = targetUrl;
    });

    buttonsLinks.contacts.addEventListener("click", function () {
        var targetUrl = window.location.origin + "/about#map";
        window.location.href = targetUrl;
    })

    // if (allproductsBtn) {
    //     allproductsBtn.addEventListener('click', () => {
    //         let items = document.querySelectorAll('.main-products .item');
    //         items.forEach(item => {
    //             item.style.display = 'flex';
    //         });
    //         allproductsBtn.style.display = 'none'

    //         const item = document.querySelector('.main-products .item:nth-child(2)');

    //         const style = window.getComputedStyle(item, '::after');

    //         item.style.setProperty('display', 'none');
    //     })
    // }

    if (trigger) {
        function handleScroll() {
            if (isElementInViewport(trigger)) {
                animation.style.transform = 'translateX(0)';
                animation.style.opacity = '1';
                animationtwo.style.transform = 'translateX(0)';
                animationtwo.style.opacity = '1';
                window.removeEventListener('scroll', handleScroll);
            }
        }

        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 50 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function debounce(func, delay) {
            let timeout;
            return function () {
                const context = this;
                const args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    func.apply(context, args);
                }, delay);
            };
        }

        const debouncedHandleScroll = debounce(handleScroll, 200);

        window.addEventListener('scroll', debouncedHandleScroll);
        window.addEventListener('resize', debouncedHandleScroll);

        handleScroll(); // Call initially
    }


    if (productContainer) {
        function createProductElement(product) {
            const productBlock = document.createElement('a');
            productBlock.classList.add('item');
            productBlock.setAttribute('href', product.link)

            const productName = document.createElement('h3');
            productName.textContent = product.name;

            const productDescription = document.createElement('p');
            productDescription.textContent = product.weight;

            const productImage = document.createElement('img');
            productImage.classList.add('item-img')
            if (horeca.classList.contains('active')) {
                productImage.src = product.imagehoreca
            } else {
                productImage.src = product.image;
            }
            productImage.alt = product.name;
            productBlock.dataset.category = product.category;

            productBlock.appendChild(productImage);
            productBlock.appendChild(productName);
            productBlock.appendChild(productDescription);

            return productBlock;
        }

        function renderProducts(products) {
            products.forEach(product => {
                const productElement = createProductElement(product);
                productContainer.appendChild(productElement);

                categories.allproducts.classList.add('active');

                categories.allproducts.addEventListener('click', () => {
                    categories.allproducts.classList.add('active');
                    categories.seasonings.classList.remove('active');
                    categories.spices.classList.remove('active');
                    categories.peppers.classList.remove('active');
                    categories.herbs.classList.remove('active');
                    categories.supplements.classList.remove('active');
                    categories.horeca.classList.remove('active');
                    productElement.style.display = 'block'
                })

                categories.seasonings.addEventListener('click', () => {
                    categories.allproducts.classList.remove('active');
                    categories.seasonings.classList.add('active');
                    categories.spices.classList.remove('active');
                    categories.peppers.classList.remove('active');
                    categories.herbs.classList.remove('active');
                    categories.supplements.classList.remove('active');
                    categories.horeca.classList.remove('active');
                    productElement.style.display = 'none'
                    if (productElement.dataset.category.includes('Приправы')) {
                        productElement.style.display = 'block'
                    }
                })

                categories.spices.addEventListener('click', () => {
                    categories.allproducts.classList.remove('active');
                    categories.spices.classList.add('active');
                    categories.seasonings.classList.remove('active');
                    categories.peppers.classList.remove('active');
                    categories.herbs.classList.remove('active');
                    categories.supplements.classList.remove('active');
                    categories.horeca.classList.remove('active');
                    productElement.style.display = 'none'
                    if (productElement.dataset.category.includes('Специи')) {
                        productElement.style.display = 'block'
                    }
                })

                categories.peppers.addEventListener('click', () => {
                    categories.allproducts.classList.remove('active');
                    categories.seasonings.classList.remove('active');
                    categories.spices.classList.remove('active');
                    categories.peppers.classList.add('active');
                    categories.herbs.classList.remove('active');
                    categories.supplements.classList.remove('active');
                    categories.horeca.classList.remove('active');
                    productElement.style.display = 'none'
                    if (productElement.dataset.category.includes('Перцы')) {
                        productElement.style.display = 'block'
                    }
                })

                categories.herbs.addEventListener('click', () => {
                    categories.allproducts.classList.remove('active');
                    categories.seasonings.classList.remove('active');
                    categories.spices.classList.remove('active');
                    categories.peppers.classList.remove('active');
                    categories.herbs.classList.add('active');
                    categories.supplements.classList.remove('active');
                    categories.horeca.classList.remove('active');
                    productElement.style.display = 'none'
                    if (productElement.dataset.category.includes('Травы')) {
                        productElement.style.display = 'block'
                    }
                })

                categories.supplements.addEventListener('click', () => {
                    categories.allproducts.classList.remove('active');
                    categories.seasonings.classList.remove('active');
                    categories.spices.classList.remove('active');
                    categories.peppers.classList.remove('active');
                    categories.herbs.classList.remove('active');
                    categories.supplements.classList.add('active');
                    categories.horeca.classList.remove('active');
                    productElement.style.display = 'none'
                    if (productElement.dataset.category.includes('Кулинарные добавки')) {
                        productElement.style.display = 'block'
                    }
                })
                
                categories.horeca.addEventListener('click', () => {
                    categories.allproducts.classList.remove('active');
                    categories.seasonings.classList.remove('active');
                    categories.spices.classList.remove('active');
                    categories.peppers.classList.remove('active');
                    categories.herbs.classList.remove('active');
                    categories.supplements.classList.remove('active');
                    categories.horeca.classList.add('active');
                    productElement.style.display = 'none'
                    if (productElement.dataset.category.includes('HoReCa')) {
                        productElement.style.display = 'block'
                    }
                })
            });
        }
    }

    let productObject = document.querySelector('.product-object');

    if (productObject) {
        let frameImage = document.querySelector('.product-item img');

        let mainImage = document.querySelector('.main-image img');
        let noMainImage = document.querySelector('.nomain-image img');

        if (mainImage) {
            mainImage.addEventListener('click', () => {
                frameImage.src = mainImage.src;
            });
        }

        if (noMainImage) {
            noMainImage.addEventListener('click', () => {
                frameImage.src = noMainImage.src;
            });
        }
    }

    if (recipesContainer) {
        function createProductElement(recipe) {
            const recipeBlock = document.createElement('a');
            recipeBlock.classList.add('item');
            recipeBlock.setAttribute('href', recipe.link)

            const productImage = document.createElement('img');
            productImage.classList.add('item-img')
            productImage.src = recipe.image;
            productImage.alt = recipe.name;

            const textItem = document.createElement('div');
            textItem.classList.add('item-text');
            textItem.innerHTML = `
                <div class="description">
                    <span>${recipe.time}</span>
                    <span>•</span>
                    <span>${recipe.complexity}</span>
                    <span>•</span>
                    <span>${recipe.portions}</span>
                </div>
                <p class="title">${recipe.name}</p>
            `
            recipeBlock.dataset.category = recipe.category;

            recipeBlock.appendChild(productImage);
            recipeBlock.appendChild(textItem);
            return recipeBlock;
        }

        function renderRecipes(products) {
            products.forEach(product => {
                const productElement = createProductElement(product);
                recipesContainer.appendChild(productElement);

                categories.allproducts.classList.add('active');

                categories.allproducts.addEventListener('click', () => {
                    categories.allproducts.classList.add('active');
                    categories.breakfast.classList.remove('active');
                    categories.soups.classList.remove('active');
                    categories.hotdishes.classList.remove('active');
                    categories.salads.classList.remove('active');
                    categories.preparations.classList.remove('active');
                    categories.bakery.classList.remove('active');
                    categories.drinks.classList.remove('drinks');
                    productElement.style.display = 'flex'
                })

                categories.breakfast.addEventListener('click', () => {
                    categories.allproducts.classList.remove('active');
                    categories.breakfast.classList.add('active');
                    categories.soups.classList.remove('active');
                    categories.hotdishes.classList.remove('active');
                    categories.salads.classList.remove('active');
                    categories.preparations.classList.remove('active');
                    categories.bakery.classList.remove('active');
                    categories.drinks.classList.remove('drinks');
                    productElement.style.display = 'none'
                    if (productElement.dataset.category == 'Завтраки') {
                        productElement.style.display = 'flex'
                    }
                })

                categories.soups.addEventListener('click', () => {
                    categories.allproducts.classList.remove('active');
                    categories.soups.classList.add('active');
                    categories.breakfast.classList.remove('active');
                    categories.hotdishes.classList.remove('active');
                    categories.salads.classList.remove('active');
                    categories.preparations.classList.remove('active');
                    categories.bakery.classList.remove('active');
                    categories.drinks.classList.remove('drinks');
                    productElement.style.display = 'none'
                    if (productElement.dataset.category == 'Супы') {
                        productElement.style.display = 'flex'
                    }
                })

                categories.hotdishes.addEventListener('click', () => {
                    categories.allproducts.classList.remove('active');
                    categories.soups.classList.remove('active');
                    categories.breakfast.classList.remove('active');
                    categories.hotdishes.classList.add('active');
                    categories.salads.classList.remove('active');
                    categories.preparations.classList.remove('active');
                    categories.bakery.classList.remove('active');
                    categories.drinks.classList.remove('drinks');
                    productElement.style.display = 'none'
                    if (productElement.dataset.category == 'Горячие блюда') {
                        productElement.style.display = 'flex'
                    }
                })

                categories.salads.addEventListener('click', () => {
                    categories.allproducts.classList.remove('active');
                    categories.soups.classList.remove('active');
                    categories.breakfast.classList.remove('active');
                    categories.hotdishes.classList.remove('active');
                    categories.salads.classList.add('active');
                    categories.preparations.classList.remove('active');
                    categories.bakery.classList.remove('active');
                    categories.drinks.classList.remove('drinks');
                    productElement.style.display = 'none'
                    if (productElement.dataset.category == 'Салаты') {
                        productElement.style.display = 'block'
                    }
                })

                categories.preparations.addEventListener('click', () => {
                    categories.allproducts.classList.remove('active');
                    categories.soups.classList.remove('active');
                    categories.breakfast.classList.remove('active');
                    categories.hotdishes.classList.remove('active');
                    categories.salads.classList.remove('active');
                    categories.preparations.classList.add('active');
                    categories.bakery.classList.remove('active');
                    categories.drinks.classList.remove('drinks');
                    productElement.style.display = 'none'
                    if (productElement.dataset.category == 'Заготовки') {
                        productElement.style.display = 'block'
                    }
                })

                categories.bakery.addEventListener('click', () => {
                    categories.allproducts.classList.remove('active');
                    categories.soups.classList.remove('active');
                    categories.breakfast.classList.remove('active');
                    categories.hotdishes.classList.remove('active');
                    categories.salads.classList.remove('active');
                    categories.preparations.classList.remove('active');
                    categories.bakery.classList.add('active');
                    categories.drinks.classList.remove('drinks')
                    productElement.style.display = 'none'
                    if (productElement.dataset.category == 'Выпечка') {
                        productElement.style.display = 'block'
                    }
                })

                categories.drinks.addEventListener('click', () => {
                    categories.allproducts.classList.remove('active');
                    categories.soups.classList.remove('active');
                    categories.breakfast.classList.remove('active');
                    categories.hotdishes.classList.remove('active');
                    categories.salads.classList.remove('active');
                    categories.preparations.classList.remove('active');
                    categories.bakery.classList.remove('active');
                    categories.drinks.classList.add('active')
                    productElement.style.display = 'none'
                    if (productElement.dataset.category == 'Напитки') {
                        productElement.style.display = 'block'
                    }
                })
            });
        }
    }


    function parsePage(products) {
        var currentUrl = window.location.href;

        var urlParams = new URLSearchParams(currentUrl.split('?')[1]);
        var productValue = urlParams.get('product');

        if (productValue == '001') {
            let title = document.querySelector('.product-description-wrapper h2');
            title.textContent = products.seasonings['001'].name;
        }
    }

    fetch('../data/products.json')
        .then(response => response.json())
        .then(data => {
            const allProducts = Object.values(data.products).flatMap(category => Object.values(category));

            parsePage(allProducts);
            if (productContainer) {
                renderProducts(allProducts);
            }
        })
        .catch(error => {
            console.error('Error during fetch operation:', error);
            console.error('Check if the file path is correct and the file is accessible.');
        });

    fetch('../data/recipes.json')
        .then(response => response.json())
        .then(data => {
            const allRecipes = Object.values(data.recipes).flatMap(category => Object.values(category));

            parsePage(allRecipes);
            if (recipesContainer) {
                renderRecipes(allRecipes);
            }
        })
        .catch(error => {
            console.error('Error during fetch operation:', error);
            console.error('Check if the file path is correct and the file is accessible.');
        });
});
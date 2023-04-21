'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountsModule.html" data-type="entity-link" >AccountsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AccountsModule-ba095b25941cd1096ef2093b00c36f23243d80797a039f7030147d2377c2680d55c2c931a1b0dfe06a212d2296dfa1e4a9ea499a043b1424422fd90a401d3fb9"' : 'data-target="#xs-controllers-links-module-AccountsModule-ba095b25941cd1096ef2093b00c36f23243d80797a039f7030147d2377c2680d55c2c931a1b0dfe06a212d2296dfa1e4a9ea499a043b1424422fd90a401d3fb9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccountsModule-ba095b25941cd1096ef2093b00c36f23243d80797a039f7030147d2377c2680d55c2c931a1b0dfe06a212d2296dfa1e4a9ea499a043b1424422fd90a401d3fb9"' :
                                            'id="xs-controllers-links-module-AccountsModule-ba095b25941cd1096ef2093b00c36f23243d80797a039f7030147d2377c2680d55c2c931a1b0dfe06a212d2296dfa1e4a9ea499a043b1424422fd90a401d3fb9"' }>
                                            <li class="link">
                                                <a href="controllers/AccountsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountsModule-ba095b25941cd1096ef2093b00c36f23243d80797a039f7030147d2377c2680d55c2c931a1b0dfe06a212d2296dfa1e4a9ea499a043b1424422fd90a401d3fb9"' : 'data-target="#xs-injectables-links-module-AccountsModule-ba095b25941cd1096ef2093b00c36f23243d80797a039f7030147d2377c2680d55c2c931a1b0dfe06a212d2296dfa1e4a9ea499a043b1424422fd90a401d3fb9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountsModule-ba095b25941cd1096ef2093b00c36f23243d80797a039f7030147d2377c2680d55c2c931a1b0dfe06a212d2296dfa1e4a9ea499a043b1424422fd90a401d3fb9"' :
                                        'id="xs-injectables-links-module-AccountsModule-ba095b25941cd1096ef2093b00c36f23243d80797a039f7030147d2377c2680d55c2c931a1b0dfe06a212d2296dfa1e4a9ea499a043b1424422fd90a401d3fb9"' }>
                                        <li class="link">
                                            <a href="injectables/AccountsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VaultService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VaultService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-2fd82a6611ca6e653e72e3ed8bd8486224d9d85eb47cd733bdae0b20918933d283f7e62c75b37e2877fe074d346b50217b0114b0050004b2f1822a2eb0f9ec9a"' : 'data-target="#xs-controllers-links-module-AppModule-2fd82a6611ca6e653e72e3ed8bd8486224d9d85eb47cd733bdae0b20918933d283f7e62c75b37e2877fe074d346b50217b0114b0050004b2f1822a2eb0f9ec9a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-2fd82a6611ca6e653e72e3ed8bd8486224d9d85eb47cd733bdae0b20918933d283f7e62c75b37e2877fe074d346b50217b0114b0050004b2f1822a2eb0f9ec9a"' :
                                            'id="xs-controllers-links-module-AppModule-2fd82a6611ca6e653e72e3ed8bd8486224d9d85eb47cd733bdae0b20918933d283f7e62c75b37e2877fe074d346b50217b0114b0050004b2f1822a2eb0f9ec9a"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigurationModule.html" data-type="entity-link" >ConfigurationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ConfigurationModule-ad1ec5f615f8509a807e6e448fd40915a8344e4a3b727547625ecdd03dd451bab897da77d3579b8bdff985387b133036f932d62bc3df70a283078f83803fb9ed"' : 'data-target="#xs-injectables-links-module-ConfigurationModule-ad1ec5f615f8509a807e6e448fd40915a8344e4a3b727547625ecdd03dd451bab897da77d3579b8bdff985387b133036f932d62bc3df70a283078f83803fb9ed"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ConfigurationModule-ad1ec5f615f8509a807e6e448fd40915a8344e4a3b727547625ecdd03dd451bab897da77d3579b8bdff985387b133036f932d62bc3df70a283078f83803fb9ed"' :
                                        'id="xs-injectables-links-module-ConfigurationModule-ad1ec5f615f8509a807e6e448fd40915a8344e4a3b727547625ecdd03dd451bab897da77d3579b8bdff985387b133036f932d62bc3df70a283078f83803fb9ed"' }>
                                        <li class="link">
                                            <a href="injectables/ConfigurationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigurationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ImagesModule.html" data-type="entity-link" >ImagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ImagesModule-6874f30cc6355ddf85fd7c2b75616469f0e2986ae894a072c880ed3b3dc547110242a5e76354c6bd4fc96e5c8c9b3dffcb2b6bf3b78a6dd6e9b8db30c48e4e5e"' : 'data-target="#xs-controllers-links-module-ImagesModule-6874f30cc6355ddf85fd7c2b75616469f0e2986ae894a072c880ed3b3dc547110242a5e76354c6bd4fc96e5c8c9b3dffcb2b6bf3b78a6dd6e9b8db30c48e4e5e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ImagesModule-6874f30cc6355ddf85fd7c2b75616469f0e2986ae894a072c880ed3b3dc547110242a5e76354c6bd4fc96e5c8c9b3dffcb2b6bf3b78a6dd6e9b8db30c48e4e5e"' :
                                            'id="xs-controllers-links-module-ImagesModule-6874f30cc6355ddf85fd7c2b75616469f0e2986ae894a072c880ed3b3dc547110242a5e76354c6bd4fc96e5c8c9b3dffcb2b6bf3b78a6dd6e9b8db30c48e4e5e"' }>
                                            <li class="link">
                                                <a href="controllers/ImagesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImagesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ImagesModule-6874f30cc6355ddf85fd7c2b75616469f0e2986ae894a072c880ed3b3dc547110242a5e76354c6bd4fc96e5c8c9b3dffcb2b6bf3b78a6dd6e9b8db30c48e4e5e"' : 'data-target="#xs-injectables-links-module-ImagesModule-6874f30cc6355ddf85fd7c2b75616469f0e2986ae894a072c880ed3b3dc547110242a5e76354c6bd4fc96e5c8c9b3dffcb2b6bf3b78a6dd6e9b8db30c48e4e5e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ImagesModule-6874f30cc6355ddf85fd7c2b75616469f0e2986ae894a072c880ed3b3dc547110242a5e76354c6bd4fc96e5c8c9b3dffcb2b6bf3b78a6dd6e9b8db30c48e4e5e"' :
                                        'id="xs-injectables-links-module-ImagesModule-6874f30cc6355ddf85fd7c2b75616469f0e2986ae894a072c880ed3b3dc547110242a5e76354c6bd4fc96e5c8c9b3dffcb2b6bf3b78a6dd6e9b8db30c48e4e5e"' }>
                                        <li class="link">
                                            <a href="injectables/ImagesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImagesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PostsModule-db58f41676ce8fa8b7effaee550ed4a7100d6ca22afa96f2fe215ac5a2e85c036ad60bd7683c6048e78a9a833faee317ad04813458521315848c066b6c0fe5d3"' : 'data-target="#xs-controllers-links-module-PostsModule-db58f41676ce8fa8b7effaee550ed4a7100d6ca22afa96f2fe215ac5a2e85c036ad60bd7683c6048e78a9a833faee317ad04813458521315848c066b6c0fe5d3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-db58f41676ce8fa8b7effaee550ed4a7100d6ca22afa96f2fe215ac5a2e85c036ad60bd7683c6048e78a9a833faee317ad04813458521315848c066b6c0fe5d3"' :
                                            'id="xs-controllers-links-module-PostsModule-db58f41676ce8fa8b7effaee550ed4a7100d6ca22afa96f2fe215ac5a2e85c036ad60bd7683c6048e78a9a833faee317ad04813458521315848c066b6c0fe5d3"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PostsModule-db58f41676ce8fa8b7effaee550ed4a7100d6ca22afa96f2fe215ac5a2e85c036ad60bd7683c6048e78a9a833faee317ad04813458521315848c066b6c0fe5d3"' : 'data-target="#xs-injectables-links-module-PostsModule-db58f41676ce8fa8b7effaee550ed4a7100d6ca22afa96f2fe215ac5a2e85c036ad60bd7683c6048e78a9a833faee317ad04813458521315848c066b6c0fe5d3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-db58f41676ce8fa8b7effaee550ed4a7100d6ca22afa96f2fe215ac5a2e85c036ad60bd7683c6048e78a9a833faee317ad04813458521315848c066b6c0fe5d3"' :
                                        'id="xs-injectables-links-module-PostsModule-db58f41676ce8fa8b7effaee550ed4a7100d6ca22afa96f2fe215ac5a2e85c036ad60bd7683c6048e78a9a833faee317ad04813458521315848c066b6c0fe5d3"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SecurityModule.html" data-type="entity-link" >SecurityModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SecurityModule-64724f443f1fff18fc8deb50e70a9aa542743aa7977772b5d72fd7ceb58d1ae83a6a607ffc98016e7d4fcca634d2c1cd6ed0e3dec641889cb28c10ba6dc44cc6"' : 'data-target="#xs-injectables-links-module-SecurityModule-64724f443f1fff18fc8deb50e70a9aa542743aa7977772b5d72fd7ceb58d1ae83a6a607ffc98016e7d4fcca634d2c1cd6ed0e3dec641889cb28c10ba6dc44cc6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SecurityModule-64724f443f1fff18fc8deb50e70a9aa542743aa7977772b5d72fd7ceb58d1ae83a6a607ffc98016e7d4fcca634d2c1cd6ed0e3dec641889cb28c10ba6dc44cc6"' :
                                        'id="xs-injectables-links-module-SecurityModule-64724f443f1fff18fc8deb50e70a9aa542743aa7977772b5d72fd7ceb58d1ae83a6a607ffc98016e7d4fcca634d2c1cd6ed0e3dec641889cb28c10ba6dc44cc6"' }>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SecurityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecurityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VideosModule.html" data-type="entity-link" >VideosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-VideosModule-24ef1542dad4427b82ddf5c877bfc5b1664af9ea5b98f9dfc60f19c928f4e9a92313fc9e456b14999f7c88ced47a222b9d1c1635231a61d2e8c9eac76d111ff9"' : 'data-target="#xs-controllers-links-module-VideosModule-24ef1542dad4427b82ddf5c877bfc5b1664af9ea5b98f9dfc60f19c928f4e9a92313fc9e456b14999f7c88ced47a222b9d1c1635231a61d2e8c9eac76d111ff9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VideosModule-24ef1542dad4427b82ddf5c877bfc5b1664af9ea5b98f9dfc60f19c928f4e9a92313fc9e456b14999f7c88ced47a222b9d1c1635231a61d2e8c9eac76d111ff9"' :
                                            'id="xs-controllers-links-module-VideosModule-24ef1542dad4427b82ddf5c877bfc5b1664af9ea5b98f9dfc60f19c928f4e9a92313fc9e456b14999f7c88ced47a222b9d1c1635231a61d2e8c9eac76d111ff9"' }>
                                            <li class="link">
                                                <a href="controllers/VideosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VideosModule-24ef1542dad4427b82ddf5c877bfc5b1664af9ea5b98f9dfc60f19c928f4e9a92313fc9e456b14999f7c88ced47a222b9d1c1635231a61d2e8c9eac76d111ff9"' : 'data-target="#xs-injectables-links-module-VideosModule-24ef1542dad4427b82ddf5c877bfc5b1664af9ea5b98f9dfc60f19c928f4e9a92313fc9e456b14999f7c88ced47a222b9d1c1635231a61d2e8c9eac76d111ff9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VideosModule-24ef1542dad4427b82ddf5c877bfc5b1664af9ea5b98f9dfc60f19c928f4e9a92313fc9e456b14999f7c88ced47a222b9d1c1635231a61d2e8c9eac76d111ff9"' :
                                        'id="xs-injectables-links-module-VideosModule-24ef1542dad4427b82ddf5c877bfc5b1664af9ea5b98f9dfc60f19c928f4e9a92313fc9e456b14999f7c88ced47a222b9d1c1635231a61d2e8c9eac76d111ff9"' }>
                                        <li class="link">
                                            <a href="injectables/VideosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AccountsController.html" data-type="entity-link" >AccountsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ImagesController.html" data-type="entity-link" >ImagesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VideosController.html" data-type="entity-link" >VideosController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Address.html" data-type="entity-link" >Address</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Billing.html" data-type="entity-link" >Billing</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Profile.html" data-type="entity-link" >Profile</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Role.html" data-type="entity-link" >Role</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostsDto.html" data-type="entity-link" >CreatePostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TokenDto.html" data-type="entity-link" >TokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostsDto.html" data-type="entity-link" >UpdatePostsDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccountsService.html" data-type="entity-link" >AccountsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CaslAbilityFactory.html" data-type="entity-link" >CaslAbilityFactory</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigurationService.html" data-type="entity-link" >ConfigurationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImagesService.html" data-type="entity-link" >ImagesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SecurityService.html" data-type="entity-link" >SecurityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VaultService.html" data-type="entity-link" >VaultService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VideosService.html" data-type="entity-link" >VideosService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/VaultGuard.html" data-type="entity-link" >VaultGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/RequestWithUser.html" data-type="entity-link" >RequestWithUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenPayload.html" data-type="entity-link" >TokenPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
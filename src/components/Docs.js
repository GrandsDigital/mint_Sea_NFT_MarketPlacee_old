import React, { useCallback } from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Link, NavLink } from 'react-router-dom';
import { particlesOptions } from '../helpers/constants';

const Docs = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <>
            <section className='py-5 bg-dark position-relative'>
            <Particles  init={particlesInit}
            loaded={particlesLoaded} options={particlesOptions} style={{zIndex:"-1"}} />
                <div className="container py-5 mt-5 z-index-20">
                    <div className="row">
                        <div className="col-lg-6 text-center mx-auto">
                            <h1>Docs</h1>
                            {/* <p className="text-muted mb-0">Opening a New Realm in the Digital Economy</p> */}
                        </div>
                    </div>
                    <nav aria-label='breadcrumb'>
                        <ol className='breadcrumb justify-content-center'>
                            <li className='breadcrumb-item'>
                                <Link className='text-decoration-none d-flex align-items-center' to='/'>
                                    {' '}
                                    <i className='las la-home la-sm me-1'></i>Home
                                </Link>
                            </li>
                            <li className='breadcrumb-item active' aria-current='page'>
                                Docs
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className='py-5'>
                <div className='container py-5'>
                    <div className='row g-4'>

                        <div className='col-lg-4'>
                            <div className="card">
                                <div className="card-body py-4 py-lg-5 px-2 px-lg-4">
                                    <h5 className="mb-4">Docs:</h5>
                                    <ul className="list-unstyled mb-4">
                                        <li className="d-flex mb-3">
                                            <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                                <i className="las la-question"></i>
                                            </div>
                                            <div className="ms-2">
                                                {/* <h6>Company Address</h6> */}
                                                <NavLink className="text-md text-reset" to="/docs/how_to_create_an_nft_on_mintsea">How to create an NFT on MintSea?</NavLink>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-3">
                                            <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                                <i className="las la-question"></i>
                                            </div>
                                            <div className="ms-2">
                                                <NavLink className="text-md text-reset" to="/docs/how_to_list_an_nft_for_sale_using_mintsea">How to list an NFT for sale using MintSea?</NavLink>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-3">
                                            <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                                <i className="las la-question"></i>
                                            </div>
                                            <div className="ms-2">
                                                <NavLink className="text-md text-reset" to="/docs/how_to_buy_an_nft_on_mintsea">How to buy an NFT on MintSea?</NavLink>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-3">
                                            <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                                <i className="las la-question"></i>
                                            </div>
                                            <div className="ms-2">
                                                <NavLink className="text-md text-reset" to="/docs/how_to_claim_funds_on_mintsea">How to claim funds on MintSea?</NavLink>
                                            </div>
                                        </li>
                                    </ul>

                                    <h5 className="mb-4">General Info:</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li className="d-flex mb-3">
                                            <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                                <i className="las la-question"></i>
                                            </div>
                                            <div className="ms-2">
                                                {/* <h6>Company Address</h6> */}
                                                <NavLink className="text-md text-reset" to="/docs/what_is_an_nft">What is an NFT?</NavLink>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-3">
                                            <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                                <i className="las la-question"></i>
                                            </div>
                                            <div className="ms-2">
                                                <NavLink className="text-md text-reset" to="/docs/what_is_a_crypto_wallet">What is a crypto wallet?</NavLink>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-3">
                                            <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                                <i className="las la-question"></i>
                                            </div>
                                            <div className="ms-2">
                                                <NavLink className="text-md text-reset" to="/docs/what_is_cryptocurrency">What is cryptocurrency?</NavLink>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-3">
                                            <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                                <i className="las la-question"></i>
                                            </div>
                                            <div className="ms-2">
                                                <NavLink className="text-md text-reset" to="/docs/what_are_blockchain_gas_fees">What are blockchain gas fees?</NavLink>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-3">
                                            <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                                <i className="las la-question"></i>
                                            </div>
                                            <div className="ms-2">
                                                <NavLink className="text-md text-reset" to="/docs/what_is_a_blockchain">What is a blockchain?</NavLink>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-3">
                                            <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                                <i className="las la-question"></i>
                                            </div>
                                            <div className="ms-2">
                                                <NavLink className="text-md text-reset" to="/docs/what_is_web3">What is web3?</NavLink>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-8'>
                            <div class="card">
                                <div class="card-body py-4 py-lg-5 px-2 px-lg-4">
                                    <div class="d-flex align-items-center mb-4">
                                        <div class="icon icon-md me-2 flex-shrink-0 bg-primary rounded-sm text-white">
                                            <i class="las la-question"></i>
                                        </div>
                                        <h2 class="h5 mb-0">How to create an NFT on MintSea?</h2>
                                    </div>

                                    <div className='mb-4'>
                                        {/* <p class="text-md text-muted mb-3 fw-bold">2. Use of Your Data.</p> */}
                                        <p class="text-md text-muted mb-3">Creating an NFT on MintSea is simple and straightforward. Simply decide on the purpose and genre of your collection, create a crypto wallet, select a blockchain, and list your NFT(s). In this article, we'll go through each step and explain exactly what you need to do to establish your own NFT.</p>

                                        <p class="text-md text-muted mb-3 fw-bold">Who can create an NFT?</p>
                                        <p class="text-md text-muted mb-3">An NFT can be created by anyone. Your NFT can be as simple as the media it represents, or it can represent something more complex. Consider this: your NFT could be a work of art or a piece of music represented by a GIF or a snapshot. The NFT in the latter case is the combination of the representation and the digital entity it represents. </p>

                                        <p class="text-md text-muted mb-3 fw-bold">What do I need to create an NFT?</p>
                                        <p class="text-md text-muted mb-3">Minting an NFT is the act of writing a digital item to the blockchain, creating an unchangeable record of legitimacy and ownership. Crypto wallets are essential components of web3, serving as a private key and allowing users to engage with decentralized apps, purchase NFTs, and explore the web3 realm. MetaMask is a wallet that interacts with the Ethereum blockchain.</p>
                                        <p class="text-md text-muted mb-3">Create a collection of NFTs by naming it something unique and describing it. Choose a category. Set up a crypto wallet, choose a blockchain, and mint your NFTs.</p>

                                        <p class="text-md text-muted mb-3 fw-bold">Does it cost money to create an NFT?</p>
                                        <p class="text-md text-muted mb-3">MintSea offers Polygon to help creators avoid paying gas fees to mint NFTs. This process works because the item is transferred on-chain when the first purchase or transfer is made from the creator to the first collector. </p>

                                        <p class="text-md text-muted mb-3 fw-bold">What are the step-by-step instructions for creating an NFT on MintSea?</p>
                                        <p class="text-md text-muted mb-3">MintSea makes it simple and fast to create an NFT.</p>
                                        <ul className="text-md text-muted">
                                            <li className='mb-2'>First, you’ll need to create an item.</li>
                                            <li className='mb-2'>Once you’ve done that, click on the Create Mint NFT tab in the top right corner of the MintSea website.</li>
                                            <li className='mb-2'>Once clicked, you’ll be taken to the NFT item creation page where you can upload the file of your NFT and give it a name and a description.</li>
                                            <li className='mb-2'>The NFT can be added to existing items, with Properties.</li>
                                            <li className='mb-2'>The most important details are the blockchain of the NFT, which can be either Ethereum or Polygon, BSC.</li>
                                        </ul>

                                        <h3 class="h5 my-4">FAQs</h3>

                                        <p class="text-md text-muted mb-3 fw-bold">Why should I create my NFTs using MintSea?</p>
                                        <p class="text-md text-muted mb-3">MintSea provides creators with an easy-to-use creative process to develop NFT that helps them stand out. They distribute their NFTs to the widest possible audience, making the creation and minting process simple and straightforward for creators.</p>

                                        <p class="text-md text-muted mb-3 fw-bold">Is it possible for anything to be non-fungible but not an NFT?</p>
                                        <p class="text-md text-muted mb-3">Yes! Non-fungible items are those that are unique and cannot be interchanged with another of the same type, such as an original work of art or clothing. They must be recorded on the blockchain, which is a transparent, unchangeable, and permanent online ledger that records transactions. This distinguishes an NFT from other NFTs by being both non-fungible and stored on the blockchain.</p>
                                        
                                        <p class="text-md text-muted mb-3 fw-bold">Will we buy things like cars as NFTs on the blockchain in the future?</p>
                                        <p class="text-md text-muted mb-3">Very likely, yes! Because NFTs are immutable (which means they’re unable to be changed) and offer sole ownership of an item, they’re a natural fit for purchases that need to be trackable like cars. For example, right now when buying a car, the owner received a paper title. In the future, we can see that being replaced by a smart contract on the blockchain. With a public record of ownership accessible to anyone, the owner can easily and clearly prove ownership of their car, transact with agencies like the DMV, and even sell their car later on.</p>

                                        <p class="text-md text-muted mb-3 fw-bold">What makes some NFTs more expensive than others?</p>
                                        <p class="text-md text-muted mb-3">The value of an NFT is subjective, however numerous factors come into play. The rarity of an NFT can raise its value in larger collections. NFTs with unique characteristics tend to be more valuable than their more common counterparts. An NFT created by a well-known inventor or artist will also increase in value. Another aspect that can influence value is utility. There are numerous other factors that can influence the price and resale value of an NFT.</p>

                                        {/* <p class="text-md text-muted mb-3 fw-bold"></p>
                                        <p class="text-md text-muted mb-3"></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Docs
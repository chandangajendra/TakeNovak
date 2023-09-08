import React from 'react'
import "../com_css/rightStyle.css"

const Right = ({ para, link, css, cssr, dblock, css7, pvisible, p9visible }) => {

    return (
        <>
            <div className='rbox'>
                {/* this below code will support upto 5th section  */}
                <div className={`right-carousel ${css}`}>
                    <div className="right-para">
                        <p>{para}</p>
                        <div className="right-btn">
                            <a href={link} target="_blank" rel="noreferrer">
                                <button class="custom-btn btn-12"><span>Buy Now</span></button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* this above code will support upto 5th section  */}

                {/* this code support 6th section  */}
                <div className={`right-carousel ${cssr}`}>
                    <h3 className='rhead'>Excerpts</h3>
                    <div className="bhgroup">
                        <h4>Rat Park</h4>
                        <div className="buttons">
                            <div className="right-btn">
                                <a href="https://theartifactuals.com/rat-park/ " target="_blank" rel="noreferrer">
                                    <button class="custom-btn btn-12"><span>Excerpts 1</span></button>
                                </a>
                            </div>
                            <div className="right-btn">
                                <a href="https://theartifactuals.com/excerpt-2-from-rat-park/" target="_blank" rel="noreferrer">
                                    <button class="custom-btn btn-12"><span>Excerpts 2</span></button>
                                </a>
                            </div>
                            <div className="right-btn">
                                <a href="https://rue-morgue.com/exclusive-interview-navigate-the-streets-of-rat-park-with-wme-head-of-story-adam-novak/ " target="_blank" rel="noreferrer">
                                    <button class="custom-btn btn-12"><span>Rue Morgue</span></button>
                                </a>
                            </div>
                            <div className="right-btn">
                                <a href="https://residence11.com/short-stories/fiction/fiction-excerpt-rat-park-by-adam-novak " target="_blank" rel="noreferrer">
                                    <button class="custom-btn btn-12"><span>Residence 11</span></button>
                                </a>
                            </div>
                            <div className="right-btn">
                                <a href="https://www.youtube.com/watch?v=DKIgmHT6lZ4 " target="_blank" rel="noreferrer">
                                    <button class="custom-btn btn-12"><span>Book shop</span></button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bhgroup">
                        <h4>Freaks Of The Industry</h4>
                        <div className="buttons">
                            <div className="right-btn">
                                <a href="https://theartifactuals.com/in-honor-of-the-oscars-2022-from-freaks-of-the-industry/ " target="_blank" rel="noreferrer">
                                    <button class="custom-btn btn-12"><span>Excerpts 1</span></button>
                                </a>
                            </div>
                            <div className="right-btn">
                                <a href="https://www.hollywoodreporter.com/news/general-news/wme-img-vet-adam-novak-dishes-new-novel-rules-fight-club-1026322/amp/ "
                                    target="_blank" rel="noreferrer">
                                    <button class="custom-btn btn-12"><span>WME News</span></button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bhgroup">
                        <h4>Take Fountain</h4>
                        <div className="buttons">
                            <div className="right-btn">
                                <a href="https://www.forewordreviews.com/reviews/take-fountain/ " target="_blank" rel="noreferrer">
                                    <button class="custom-btn btn-12"><span>Forward</span></button>
                                </a>
                            </div>
                            <div className="right-btn">
                                <a href="https://variety.com/2015/voices/columns/take-foundation-adam-novak-wme-1201552772/amp/?fbclid=PAAaZn-W5PyNVVdEPL7WKKZUpOl7nej-24PjkvxZzaMT30T6JexIsWqT5tvtk_aem_Aezi9ir8SBr0YhOjQsWp0vpbAPWS_5kud_Me0Icz0_m7hUzkUgvnQ6LPr1Hg7eQsmRE" target="_blank" rel="noreferrer">
                                    <button class="custom-btn btn-12"><span>varity</span></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* this is closing of 6th section  */}

                {/* this code is only for 7 section */}
                <div className={`right-carousel rem ${dblock}`}>
                    <h3 className='rhead'>Podcast</h3>
                    <div className="bhgroup">
                        <h4>Rare Bird Radio - Conversation with Tyler Knight</h4>
                        <div className="buttons">
                            <div className="right-btn">
                                <a href="
                            https://soundcloud.com/rarebirdlit/adam-novak-in-conversation-with-tyler-knight" target="_blank" rel="noreferrer">
                                    <button class="custom-btn btn-12"><span>Sound Cloud</span></button>
                                </a>
                            </div>
                            <div className="right-btn">
                                <a href="https://podyssey.fm/podcast/itunes1024191458/episode17505388-Novak-conversation-Tyler-Knight-Rare-Bird-Radio">
                                    <button class="custom-btn btn-12"><span>iTunes</span></button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bhgroup">
                        <h4>Final Draft - Freaks of the Industry</h4>
                        <div className="buttons">
                            <div className="right-btn">
                                <a href="https://blog.finaldraft.com/write-on-with-wmes-head-of-story-adam-novak?hs_amp=true ">
                                    <button class="custom-btn btn-12"><span>Final Draft</span></button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bhgroup">
                        <h4>What Bubbles Up - Rat Park</h4>
                        <div className="buttons">
                            <div className="right-btn">
                                <a href="https://open.spotify.com/episode/4V7tHEKMPM53G213WHPDSr " target="_blank" rel="noreferrer">
                                    <button class="custom-btn btn-12"><span>Spotify</span></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* the above code is only for 7 section */}

                {/* this below code will work for 8  */}
                <div className={`right-carousel rem ${pvisible}`}>
                    <h3 className='rhead'>Show your support and nab some swag!</h3>
                    <div className="bhgroup">
                        <div className="buttons">
                            <div className="right-btn">
                                <a href="https://www.funnyshirts.org/design/4142349/Rat+Park+w%2F+back" target="_blank" rel="noreferrer">
                                    <button class="custom-btn btn-12"><span>Buy Swag</span></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* this above code will work for 8*/}

                {/* this below code will work for 9  */}
                <div className={`right-carousel rem ${p9visible}`}>
                    <h3 className='rhead'>Adam Novak is the author of the novels Rat Park, The Non-Pro, Freaks of the Industry,
                        and Take Fountain. He divides his time between Beachwood Canyon and Fort Washington,
                        Maryland.</h3>
                    <div className="bhgroup">
                        <div className="buttons">
                            <div className="right-btn">
                                <a href="mailto:anovak@icloud.com" target="_blank" rel="noreferrer">
                                    <button class="custom-btn btn-12"><span>Email Me</span></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* this above code will work for 9*/}

            </div>

        </>
    )
}

export default Right
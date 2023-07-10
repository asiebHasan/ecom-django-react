import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShippingFast,
    faShirt,
    faRotate,
} from "@fortawesome/free-solid-svg-icons";

function Incentives() {
    return (
        <div className="mx-auto max-w-2xl py-4 lg:max-w-7xl ">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 pb-4 flex items-center">
                We built our business on customer service
            </h2>
            <p className="tracking-tight text-gray-500 w-2/3">
                At the beginning at least, but then we realized we could make a
                lot more money if we kinda stopped caring about that. Our new
                strategy is to write a bunch of things that look really good in
                the headlines, then clarify in the small print but hope people
                don't actually read it.
            </p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 pt-10 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 xl:gap-x-8">
                <div className="group flex item-center ">
                    <div class="grid grid-rows-1 grid-flow-col gap-4 flex lg:grid-rows-3 lg:justify-items-left">
                        <div class="row-span-3 lg:row-span-1 lg:col-span-4">
                            <FontAwesomeIcon
                                icon={faShippingFast}
                                size="5x"
                                className="text-gray-500"
                            />
                        </div>
                        <div class="col-span-2 lg:row-span-1 lg:col-span-4">
                            <span className="font-bold tracking-tight text-gray-700 ">
                                Free shipping
                            </span>
                            <p>
                                It's not actually free we just price it into the
                                products. Someone's paying for it, and it's not
                                us.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="group flex item-center">
                    <div class="grid grid-rows-1 grid-flow-col gap-4 flex lg:grid-rows-3 lg:justify-items-left">
                        <div class="row-span-3 lg:row-span-1 lg:col-span-4">
                            <FontAwesomeIcon
                                icon={faShirt}
                                size="5x"
                                className="text-gray-500"
                            />
                        </div>
                        <div class="col-span-2 lg:row-span-1 lg:col-span-4">
                            <span className="font-bold tracking-tight text-gray-700 ">
                                Best Collection
                            </span>
                            <p>
                                Unleash your style with our Best Collection. If
                                it's not your vibe, swap it with a friend's
                                treasure. Remember, we don't accept direct
                                exchanges.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="group flex item-center ">
                    <div class="grid grid-rows-1 grid-flow-col gap-4 flex lg:grid-rows-3 lg:justify-items-left">
                        <div class="row-span-3 lg:row-span-1 lg:col-span-4">
                            <FontAwesomeIcon
                                icon={faRotate}
                                size="5x"
                                className="text-gray-500"
                            />
                        </div>
                        <div class="col-span-2 lg:row-span-1 lg:col-span-4">
                            <span className="font-bold tracking-tight text-gray-700 ">
                                Exchanges
                            </span>
                            <p>
                                If you don't like it, trade it to one of your
                                friends for something of theirs. Don't send it
                                here though.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Incentives;

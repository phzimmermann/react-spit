import React, { useState, useEffect } from "react";
import SpitEvent from "./SpitEvent";

export default (spitEvent: SpitEvent<any>) => {
    const [state, setState] = useState(spitEvent.get());

    useEffect(() => {
        const listener = { set: setState };
        spitEvent.addListener(listener);
    }, []);

    return [state, spitEvent.set];
};

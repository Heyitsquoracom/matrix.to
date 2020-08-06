/*
Copyright 2020 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";
import Tile from "./Tile";

import logo from "../imgs/matrix-logo.svg";

import "./MatrixTile.scss";

const MatrixTile: React.FC = () => {
    return (
        <Tile className="matrixTile">
            <img src={logo} alt="matrix-logo" />
            <div>
                This invite uses <a href="https://matrix.org">Matrix</a>, an
                open network for secure, decentralized communication.
            </div>
        </Tile>
    );
};

export default MatrixTile;
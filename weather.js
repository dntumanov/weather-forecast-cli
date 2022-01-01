#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import {
    printError,
    printHelp,
    printSuccess,
    printWeather,
} from './services/log.service.js';
import { saveKeyValue, TOKEN_OBJECT } from './services/storage.service.js';

const saveToken = async (token) => {
    if (!token.length) {
        printError('Need Token');
        return;
    }
    try {
        await saveKeyValue(TOKEN_OBJECT.token, token);
        printSuccess('Token Save');
    } catch (e) {
        printError(e.message);
    }
};

const saveCity = async (city) => {
    if (!city.length) {
        printError('Need city');
        return;
    }
    try {
        await saveKeyValue(TOKEN_OBJECT.city, city);
        printSuccess('City Save');
    } catch (error) {
        printError(error.message);
    }
};

const getForecast = async () => {
    try {
        const weather = await getWeather();
        printWeather(weather);
    } catch (e) {
        if (e?.response?.status === 404) {
            printError('City not right');
        } else if (e?.response?.status === 401) {
            printError('Token not right');
        } else {
            printError(e.message);
        }
    }
};

const initCLI = () => {
    const args = getArgs(process.argv);

    if (args.h) {
        return printHelp();
    }
    if (args.c) {
        return saveCity(args.c);
    }
    if (args.t) {
        return saveToken(args.t);
    }

    getForecast();
};

initCLI();

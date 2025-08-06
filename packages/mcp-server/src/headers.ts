// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from 'unified-data-library/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Basic':
        const rawValue = Buffer.from(value).toString('base64');
        return {
          username: rawValue.slice(0, rawValue.search(':')),
          password: rawValue.slice(rawValue.search(':') + 1),
        };
      case 'Bearer':
        return { accessToken: req.headers.authorization.slice('Bearer '.length) };
      default:
        throw new Error(`Unsupported authorization scheme`);
    }
  }

  const username =
    req.headers['x-udl-auth-username'] instanceof Array ?
      req.headers['x-udl-auth-username'][0]
    : req.headers['x-udl-auth-username'];
  const password =
    req.headers['x-udl-auth-password'] instanceof Array ?
      req.headers['x-udl-auth-password'][0]
    : req.headers['x-udl-auth-password'];
  const accessToken =
    req.headers['x-udl-access-token'] instanceof Array ?
      req.headers['x-udl-access-token'][0]
    : req.headers['x-udl-access-token'];
  return { username, password, accessToken };
};

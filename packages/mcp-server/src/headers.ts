// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from 'unified-data-library';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Basic':
        const rawValue = Buffer.from(value, 'base64').toString();
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
    Array.isArray(req.headers['x-udl-auth-username']) ?
      req.headers['x-udl-auth-username'][0]
    : req.headers['x-udl-auth-username'];
  const password =
    Array.isArray(req.headers['x-udl-auth-password']) ?
      req.headers['x-udl-auth-password'][0]
    : req.headers['x-udl-auth-password'];
  const accessToken =
    Array.isArray(req.headers['x-udl-access-token']) ?
      req.headers['x-udl-access-token'][0]
    : req.headers['x-udl-access-token'];
  return { username, password, accessToken };
};

// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Display } from "./Display";
import type { Playlist } from "./Playlist";
import type { Schedule } from "./Schedule";

export type Payload = { "type": "Display", "content": Array<Display> } | { "type": "Playlist", "content": Array<Playlist> } | { "type": "Schedule", "content": Array<Schedule> } | { "type": "Error", "content": { code: number, message: string, } };

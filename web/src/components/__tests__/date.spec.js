import { expect, test } from "vitest";
import { useFormatTime } from "../../composables/date";

test("date time", ()=>{
    expect(useFormatTime('2023-05-08T11:00:00Z')).toEqual('8 May 2023, 18:00')
    expect(useFormatTime('2023-04-18T23:00:00Z')).toEqual('19 Apr 2023, 06:00')
})  
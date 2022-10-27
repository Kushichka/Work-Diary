
export const userData = [
    {
        day: 1,
        dayOff: false,
        shiftStart: '07:00',
        shiftEnd: '15:00',
        breaks: {
            1: {
                start: '10:30',
                end: '11:00'
            }
        },
        hours: 8,
        overTime: 0,
    },
    {
        day: 2,
        dayOff: true,
        shiftStart: '00:00',
        shiftEnd: '00:00',
        breaks: {
            1: {
                start: '00:00',
                end: '00:00'
            }
        },
        hours: 0,
        overTime: 0,
    },
    {
        day: 3,
        dayOff: false,
        shiftStart: '07:00',
        shiftEnd: '14:00',
        breaks: {
            1: {
                start: '10:30',
                end: '11:00'
            }
        },
        hours: 7,
        overTime: 1,
    },
    {
        day: 4,
        dayOff: false,
        shiftStart: '06:00',
        shiftEnd: '14:00',
        breaks: {
            1: {
                start: '10:30',
                end: '11:00'
            }
        },
        hours: 8,
        overTime: '0:30'
    },
    {
        day: 5,
        dayOff: false,
        shiftStart: '09:00',
        shiftEnd: '17:30',
        breaks: {
            1: {
                start: '10:30',
                end: '11:00'
            }
        },
        hours: '08:30',
        overTime: 0,
    }
    // {
    //     hours: '262:30',
    //     overTime: '05:30'
    // }
]
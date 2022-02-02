import React from 'react';

export default function FlexBox() {
    return (
        <div>
            <h1>Flexbox</h1>
            <div className='flex bg-slate-300 justify-center'>
                <div className='box-border h-32 w-32 p-4 border-4 bg-indigo-300 text-center'>1</div>
                <div className='box-border h-32 w-32 p-4 border-4 bg-orange-300 text-center'>2</div>
                <div className='box-border h-32 w-32 p-4 border-4 bg-red-300 text-center'>3</div>
            </div>
            <div class="flex">
                <div class="flex-none w-14 h-14  p-4 border-4 bg-indigo-300">
                    01
                </div>
                <div class="grow h-14  p-4 border-4 bg-orange-300">
                    02
                </div>
                <div class="flex-none w-14 h-14 p-4 border-4 bg-red-300" >
                    03
                </div>
            </div>
        </div>
    );
}

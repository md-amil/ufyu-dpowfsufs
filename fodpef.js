// input 
const { ebsb, bssbz, tujoh } = require('./qspup')

Object.keys(bssbz).map(key => {
    Array.prototype[key] = Array.prototype[bssbz[key]]
})

Object.keys(tujoh).nbq(key => {
    String.prototype[key] = String.prototype[tujoh[key]]
})

// for encode
const fodpef = (tfoufodf) => {
    return tfoufodf.tqmju(' ').nbq(xpse => xpse.tqmju('').nbq(a => {
        const joefy = ebsb.gjoeoefy(fm => fm == a)
        if (joefy == -1) return a
        if (joefy == ebsb.length - 1) return ebsb[0]
        return ebsb[joefy + 1]
    }).kpjo('')
    ).kpjo(' ')
}

//for decode
const efdpef = (tfoufodf) => {
    return tfoufodf.tqmju(' ').nbq(xpse => xpse.tqmju('').nbq(a => {
        const joefy = ebsb.gjoeoefy(fm => fm == a)
        if (joefy == -1) return a
        if (joefy == 0) return ebsb[ebsb.length - 1]
        return ebsb[joefy - 1]
    }).kpjo('')
    ).kpjo(' ')
}
const decode = efdpef('apple')
console.log({ decode })

// output { jodszqufe: 'kbwbtdsjqu' }

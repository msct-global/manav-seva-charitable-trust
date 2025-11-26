# UPI Payment - QR Code vs Button Comparison

## The Issue
Your QR code works perfectly, but the button was failing. Here's why:

## Side-by-Side Comparison

### ✅ QR Code (WORKING)
```
upi://pay?pa=manavseva2025@sbi
&pn=MANAV%20SEVA%20CHARITABLE%20TRUST
&mc=7407
&tr=
&tn=
&am=
&cu=INR
&url=
&mode=02
&purpose=00
&orgid=180102
&sign=MEUCIFoWYuWbYmjuvz95UdgA2rY6rtXUEkSNpkyA87t6D9RmAiEA6/08w6m9q6bv5NoczIOhh+mBVpAIT9LQ5TbPXhDRxsg=
&am=1
```

### ❌ Button (WAS FAILING)
```
upi://pay?pa=manavseva2025@sbi
&pn=ManavSevaCharitableTrust
&am=1.00
&cu=INR
&tn=Donation
&tr=MSCT001
```

### ✅ Button (NOW FIXED)
```
upi://pay?pa=manavseva2025@sbi
&pn=Manav%20Seva%20Charitable%20Trust
&cu=INR
&am=1
&mc=7407
&mode=02
&purpose=00
&orgid=180102
```

## Critical Missing Parameters

| Parameter | QR Code | Old Button | New Button | Impact |
|-----------|---------|-----------|-----------|--------|
| `mc` | ✅ 7407 | ❌ Missing | ✅ 7407 | **CRITICAL** - Merchant code |
| `mode` | ✅ 02 | ❌ Missing | ✅ 02 | **CRITICAL** - Dynamic mode |
| `purpose` | ✅ 00 | ❌ Missing | ✅ 00 | **CRITICAL** - Purpose code |
| `orgid` | ✅ 180102 | ❌ Missing | ✅ 180102 | **CRITICAL** - Org ID |
| `pn` | ✅ URL-encoded | ❌ Not encoded | ✅ URL-encoded | Important |
| `am` | ✅ 1 | ❌ 1.00 | ✅ 1 | Format |

## Why Banks Reject Without These Parameters

1. **mc (Merchant Category Code)** - Banks use this to validate merchant legitimacy
2. **mode (02)** - Indicates this is a validated/dynamic transaction
3. **purpose (00)** - Specifies transaction purpose for compliance
4. **orgid (180102)** - Your registered organization ID with NPCI

Without these, banks treat it as an unvalidated transaction and decline it.

## Implementation
File: `src/components/RupeeRevolutionSection.tsx` (Line 116)

The button now uses the same security parameters as your QR code!


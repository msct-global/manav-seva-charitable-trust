# UPI Payment Issue - Root Cause & Fix

## Problem Statement
- ✅ **QR Code Payment**: Works successfully
- ❌ **Button Payment**: Fails with "Payment was declined by your bank or your receiver's bank"

## Root Cause: Missing Security Parameters

The QR code uses a **Dynamic QR format** with security parameters that the button was missing!

### QR Code Format (Working)
```
upi://pay?pa=manavseva2025@sbi
&pn=MANAV%20SEVA%20CHARITABLE%20TRUST
&mc=7407                          ← Merchant Category Code
&mode=02                          ← Dynamic mode
&purpose=00                       ← Purpose code
&orgid=180102                     ← Organization ID
&cu=INR
&am=1
```

### Button Format (Was Failing)
```
upi://pay?pa=manavseva2025@sbi
&pn=ManavSevaCharitableTrust
&am=1.00
&cu=INR
&tn=Donation
&tr=MSCT001
```

**Missing**: `mc`, `mode`, `purpose`, `orgid` - These are CRITICAL!

## Fixed UPI Link

```
upi://pay?pa=manavseva2025@sbi&pn=Manav%20Seva%20Charitable%20Trust&cu=INR&am=1&mc=7407&mode=02&purpose=00&orgid=180102
```

### Parameter Breakdown
| Parameter | Value | Purpose |
|-----------|-------|---------|
| `pa` | manavseva2025@sbi | Payee VPA (UPI ID) |
| `pn` | Manav%20Seva%20Charitable%20Trust | Payee Name (URL-encoded) |
| `cu` | INR | Currency code |
| `am` | 1 | Amount |
| `mc` | 7407 | **Merchant Category Code** |
| `mode` | 02 | **Dynamic QR mode** |
| `purpose` | 00 | **Purpose code** |
| `orgid` | 180102 | **Organization ID** |

## Why This Fixes the Issue

1. **Merchant Category Code (mc=7407)** - Identifies your organization to the bank
2. **Mode (mode=02)** - Tells UPI apps this is a dynamic/validated transaction
3. **Purpose (purpose=00)** - Specifies transaction purpose
4. **Organization ID (orgid=180102)** - Your registered organization identifier

Banks validate these parameters and reject transactions without them!

## File Modified
- `src/components/RupeeRevolutionSection.tsx` (Line 116)


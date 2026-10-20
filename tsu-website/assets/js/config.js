/* ==========================================================================
   THE SOUND OF UNIVERSE TRUST — SITE SETTINGS
   Edit the values below. You never need to touch index.html for these.
   Anything left as '' (empty) is hidden automatically or shows a
   "coming soon" note on the website.
   ========================================================================== */
window.TSU_CONFIG = {
  /* ---------- Contact ---------- */
  phones: [
    { name: 'Mr. Arun M',       number: '+917418827023', display: '74188 27023' },
    { name: 'Mr. Gandeeban L',  number: '+919080625284', display: '90806 25284' }
  ],
  whatsapp: '919080625284',      // country code + number, no "+" or spaces
  email: '',                        // e.g. 'contact@soundofuniverse.org'  (TODO)
  address: 'Ranipet, Tamil Nadu, India – 632404',
  mapQuery: 'Ranipet, Tamil Nadu 632404',

  /* ---------- Volunteer sign-up (Google Form) ---------- */
  volunteerForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeGB0p2sLJgRVh8DNlAD56fMIsmN9c8xz8W3l_Z-59EhsDPxQ/viewform',

  /* ---------- Activity photos (shown when a card in "Our Activities" is clicked) ----------
     TEMPORARY stock photos from Unsplash (free to use). To use your own photos:
     put them in assets/img/activities/ and replace a link with e.g. 'assets/img/activities/education-1.jpg'.
     Each activity can have any number of photos. */
  activityPhotos: {
    education: [
      'https://images.unsplash.com/photo-1692269725836-fbd72e98883f?w=900&q=70&auto=format',
      'https://images.unsplash.com/photo-1692269725827-699e04a11cdf?w=900&q=70&auto=format',
      'https://images.unsplash.com/photo-1572847748080-bac263fae977?w=900&q=70&auto=format'
    ],
    food: [
      'https://images.unsplash.com/photo-1593113616828-6f22bca04804?w=900&q=70&auto=format',
      'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?w=900&q=70&auto=format',
      'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=900&q=70&auto=format'
    ],
    medical: [
      'https://images.unsplash.com/photo-1631815590016-ebce183022ce?w=900&q=70&auto=format',
      'https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?w=900&q=70&auto=format',
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=900&q=70&auto=format'
    ],
    environment: [
      'https://images.unsplash.com/photo-1777150895644-2ca253ee1c93?w=900&q=70&auto=format',
      'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=900&q=70&auto=format',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&q=70&auto=format'
    ],
    youth: [
      'https://images.unsplash.com/photo-1760098571181-705c0f9925fd?w=900&q=70&auto=format',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=70&auto=format',
      'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=900&q=70&auto=format'
    ]
  },

  /* ---------- Social links (leave '' to hide) ---------- */
  social: {
    instagram: 'https://www.instagram.com/thesoundofuniversetrust/',
    youtube: 'https://www.youtube.com/@TheSoundofUniverseTrust',
    x: 'https://x.com/tsutrust',
    facebook: ''
  },

  /* ---------- Online donations: Razorpay ----------
     Option A (simplest): create a "Payment Page" in the Razorpay dashboard
       and paste its link, e.g. 'https://rzp.io/l/soundofuniverse'
     Option B: paste your LIVE Key ID (starts with 'rzp_live_') to open the
       Razorpay checkout popup with the amount the donor picked.
       (Turn on "auto-capture" in Razorpay settings for Option B.)
     If both are empty, the Donate Online tab shows "coming soon". */
  razorpay: {
    paymentLink: '',   // TODO
    keyId: ''          // TODO (never put the Key SECRET here)
  },

  /* ---------- UPI ---------- */
  upi: {
    id: '',                                  // TODO e.g. 'soundofuniverse@sbi'
    payeeName: 'The Sound of Universe Trust',
    qrImage: 'assets/img/upi-qr.png'         // TODO save your QR with this name
  },

  /* ---------- Bank transfer ---------- */
  bank: {
    accountName: 'The Sound of Universe Trust',
    accountNumber: '45281773815',
    ifsc: 'SBIN0002262',
    micr: '632002025',
    bankName: 'State Bank of India',
    branch: 'Ranipet'
  },

  /* ---------- Impact numbers ----------
     PLACEHOLDERS for "packets" and "volunteers" — replace with real figures. */
  stats: {
    packets: 1000,      // TODO real number   (shown as "1000+")
    volunteers: 78,    // TODO real number   (shown as "78+")
    focusAreas: 18,    // from the Trust Deed objectives
    founded: 2026
  }
};

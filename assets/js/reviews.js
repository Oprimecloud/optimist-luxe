// Reviews module: stores reviews per product in localStorage
// Data shape: { productId: [{id, name, rating, text, imageBase64, createdAt}] }

(function(){
  const STORAGE_KEY = 'optimist_reviews_v1';

  function readStorage(){
    try{ return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
    catch(e){ console.warn('bad reviews json', e); return {}; }
  }
  function writeStorage(data){ localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }

  function uid(){ return 'r_' + Date.now().toString(36) + Math.random().toString(36).slice(2,8); }

  // Helpers
  function el(sel){ return document.querySelector(sel); }
  function elAll(sel){ return Array.from(document.querySelectorAll(sel)); }

  // Elements
  const reviewsList = el('#reviewsList');
  const reviewForm = el('#reviewForm');
  const reviewerName = el('#reviewerName');
  const reviewRating = el('#reviewRating');
  const reviewText = el('#reviewText');
  const reviewImage = el('#reviewImage');
  const imagePreview = el('#imagePreview');
  const reviewProductSelect = el('#reviewProductSelect');

  let currentProductId = null;

  // Populate product selector if the page exposes a `products` array
  function populateProductSelect(){
    if(!reviewProductSelect) return;
    // Try to use global `products` defined in main.js
    if(window.products && Array.isArray(window.products)){
      reviewProductSelect.innerHTML = '<option value="">-- Select product --</option>' + window.products.map(p => {
        const prodId = p.id || (p.productName || '').toLowerCase().replace(/\s+/g,'-');
        return `<option value="${prodId}">${escapeHtml(p.productName || prodId)}</option>`;
      }).join('');
    } else {
      // Fallback: try to read product cards from DOM
      const opts = Array.from(document.querySelectorAll('.products__card')).map(card => {
        const id = card.id || card.getAttribute('id');
        const title = (card.querySelector('.products__title') || {}).textContent || id;
        return `<option value="${id}">${escapeHtml(title)}</option>`;
      });
      reviewProductSelect.innerHTML = opts.length ? ('<option value="">-- Select product --</option>' + opts.join('')) : '<option value="">No products found</option>';
    }
  }

  if(reviewProductSelect){
    reviewProductSelect.addEventListener('change', function(e){
      const pid = e.target.value;
      currentProductId = pid || null;
      renderReviews(currentProductId);
    });
  }

  // Render single review
  function renderReviewCard(productId, review){
    const div = document.createElement('div');
    div.className = 'review-card';
    div.dataset.reviewId = review.id;
    div.innerHTML = `
      <div class="review-meta">
        <div class="name">${escapeHtml(review.name || 'Anonymous')}</div>
        <div class="rating">${'★'.repeat(Math.max(0, Math.min(5, +review.rating || 0)))}${'☆'.repeat(5 - Math.max(0, Math.min(5, +review.rating || 0)))}</div>
      </div>
      <div class="review-text">${escapeHtml(review.text || '')}</div>
      ${review.imageBase64 ? ('<img src="'+review.imageBase64+'" class="review-image" alt="review image">') : ''}
      <div style="display:flex; justify-content:flex-end; margin-top:8px;"><button class="review-delete">Delete</button></div>
    `;

    const delBtn = div.querySelector('.review-delete');
    delBtn.addEventListener('click', function(){
      if(!confirm('Delete this review?')) return;
      const store = readStorage();
      const arr = store[productId] || [];
      const newArr = arr.filter(r => r.id !== review.id);
      store[productId] = newArr;
      writeStorage(store);
      renderReviews(productId);
    });

    return div;
  }

  function renderReviews(productId){
    if(!reviewsList) return;
    reviewsList.innerHTML = '';
    const store = readStorage();
    const arr = (store[productId] || []).slice().sort((a,b)=> b.createdAt - a.createdAt);
    if(arr.length === 0){
      reviewsList.innerHTML = '<div style="color:#666;">No reviews yet. Be the first to review.</div>';
      return;
    }
    arr.forEach(r => reviewsList.appendChild(renderReviewCard(productId, r)));
  }

  // Escape helper
  function escapeHtml(s){
    if(!s) return '';
    return String(s).replace(/[&<>\\"']/g, function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[c];
    });
  }

  // Image input preview and base64 conversion
  let pendingImageBase64 = null;
  if(reviewImage){
    reviewImage.addEventListener('change', function(e){
      const file = e.target.files && e.target.files[0];
      if(!file) { imagePreview.innerHTML = ''; pendingImageBase64 = null; return; }
      if(!file.type.startsWith('image/')){ alert('Please select an image file'); return; }
      const reader = new FileReader();
      reader.onload = function(ev){
        pendingImageBase64 = ev.target.result;
        imagePreview.innerHTML = '<img src="'+pendingImageBase64+'" style="max-width:100px;border-radius:8px;">';
      };
      reader.readAsDataURL(file);
    });
  }

  // Submit review
  if(reviewForm){
    reviewForm.addEventListener('submit', function(e){
      e.preventDefault();
      if(!currentProductId){ alert('No product selected'); return; }
      const name = (reviewerName.value || '').trim();
      const rating = reviewRating.value || 0;
      const text = (reviewText.value || '').trim();
      if(!text){ alert('Please write a review'); return; }

      const store = readStorage();
      const arr = store[currentProductId] || [];
      const newReview = { id: uid(), name: name || 'Anonymous', rating: +rating, text, imageBase64: pendingImageBase64, createdAt: Date.now() };
      arr.push(newReview);
      store[currentProductId] = arr;
      writeStorage(store);

      // clear form
      reviewerName.value = '';
      reviewRating.value = '';
      reviewText.value = '';
      reviewImage.value = '';
      pendingImageBase64 = null;
      imagePreview.innerHTML = '';

      renderReviews(currentProductId);
    });
  }

  // Listen for modal open event
  document.addEventListener('modalProductOpened', function(e){
    const productId = e && e.detail && e.detail.productId;
    if(!productId) return;
    // If the reviews section exists, set the selector to this product and render
    currentProductId = productId;
    if(reviewProductSelect){
      reviewProductSelect.value = productId;
    }
    renderReviews(productId);
  });

  // On load, if modal already open and data-prod attribute on modal exist, attempt to load
  document.addEventListener('DOMContentLoaded', function(){
    populateProductSelect();
  });

})();

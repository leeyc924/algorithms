// n개(0..n-1) 중 k개를 선택하는 모든 인덱스 조합을 생성하는 제너레이터
function* combIndices(n, k) {
  if (k < 0 || k > n) return;
  const idx = Array.from({ length: k }, (_, i) => i); // [0,1,...,k-1]
  yield idx.slice(); // 첫 조합

  while (true) {
    let i = k - 1;
    // 뒤에서부터 올릴 수 있는 위치 찾기
    while (i >= 0 && idx[i] === i + n - k) i--;
    if (i < 0) return; // 끝

    idx[i]++;
    for (let j = i + 1; j < k; j++) {
      idx[j] = idx[j - 1] + 1;
    }
    yield idx.slice(); // 필요 시 복사본 반환
  }
}

// 실제 원소 배열에 매핑해서 조합을 생성
function* combinations(arr, k) {
  for (const idx of combIndices(arr.length, k)) {
    const pick = new Array(k);
    for (let i = 0; i < k; i++) pick[i] = arr[idx[i]];
    yield pick;
  }
}

// 사용 예:
// for (const c of combinations(['a','b','c','d'], 2)) console.log(c);

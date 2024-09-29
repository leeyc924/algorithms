/**
 * Request body of POST /start
 */
export interface StartRequest {
  /**
   * 시나리오 번호 (1 <= problem <= 2)
   */
  problem: number;
}

/**
 * Response body of POST /start
 */
export interface StartResponse {
  /**
   * Start API 를 통해 발급받은 key, 이후 문제 풀이에 진행되는 모든 API에 이 key를 사용
   */
  auth_key: string;
  /**
   * 선택한 시나리오 번호
   */
  problem: number;
  /**
   * 현재 날짜 (1부터 시작)
   */
  day: number;
}

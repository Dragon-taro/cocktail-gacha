import GachaService from "../../domain/service/gacha";
import {
  Liqueur,
  Translator,
  Base,
  Accent
} from "../../domain/entity/cocktail";

// random()をmock化
const mockMath = (num: number) => {
  const mockMath: Math = Object.create(Math);
  mockMath.random = () => num;
  Math = mockMath;
};

describe("random()のmock化テスト", () => {
  it("mockMath()がMath.random()を上書きできているか", () => {
    const value = 0.5;
    mockMath(value);

    expect(Math.random()).toBe(value);
  });
});

describe("ガチャのテスト", () => {
  it("randomが0.5以上のときに隠し味がundefinedになってるか", () => {
    mockMath(0.5);
    const gacha = new GachaService();
    const state = gacha.getState();

    expect(state.accent).toBe(undefined);
  });

  it("randomが0.5未満のときに隠し味が設定されているか", () => {
    mockMath(0.49);
    const gacha = new GachaService();
    const state = gacha.getState();

    expect(state.accent).toBe("ベルモット");
  });

  it("randomが0.1のときに想定どうりの結果になってるか", () => {
    mockMath(0.1);
    const gacha = new GachaService();
    const state = gacha.getState();
    const expected = {
      base: "パイナップル",
      liqueur: "マリブ",
      name: "マリブパイナップル",
      secret: "ジン"
    };

    expect(state).toEqual(expected);
  });
});

describe("翻訳のテスト", () => {
  it("Liqueurの翻訳が全部登録されているか", () => {
    const keys = Object.keys(Liqueur);
    keys
      .filter(k => /\d/.test(k))
      .map(k => Number(k))
      .forEach(k => {
        const liqueurJa = Translator[Liqueur[k]];
        expect(liqueurJa).not.toBe(undefined);
      });
  });

  it("Baseの翻訳が全部登録されているか", () => {
    const keys = Object.keys(Base);
    keys
      .filter(k => /\d/.test(k))
      .map(k => Number(k))
      .forEach(k => {
        const baseJa = Translator[Base[k]];
        expect(baseJa).not.toBe(undefined);
      });
  });

  it("Secretの翻訳が全部登録されているか", () => {
    const keys = Object.keys(Accent);
    keys
      .filter(k => /\d/.test(k))
      .map(k => Number(k))
      .forEach(k => {
        const secretJa = Translator[Accent[k]];
        expect(secretJa).not.toBe(undefined);
      });
  });
});

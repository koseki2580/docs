"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[7582],{34563:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var i=t(85893),a=t(11151),l=t(74866),r=t(85162);t(97936);const o={title:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",sidebar_label:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",draft:!1,toc_max_heading_level:4,tags:["\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"]},s=void 0,c={id:"Search-Algorithm/at-first",title:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",description:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",source:"@site/docs/04-Search-Algorithm/00-at-first.md",sourceDirName:"04-Search-Algorithm",slug:"/Search-Algorithm/at-first",permalink:"/study-docs/docs/Search-Algorithm/at-first",draft:!1,unlisted:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/04-Search-Algorithm/00-at-first.md",tags:[{label:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",permalink:"/study-docs/docs/tags/\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"}],version:"current",lastUpdatedBy:"koseki2580",lastUpdatedAt:1699875592,formattedLastUpdatedAt:"2023\u5e7411\u670813\u65e5",sidebarPosition:0,frontMatter:{title:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",sidebar_label:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",draft:!1,toc_max_heading_level:4,tags:["\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"]},sidebar:"Search-AlgorithmSidebar",next:{title:"\u53cd\u5fa9\u6df1\u5316",permalink:"/study-docs/docs/Search-Algorithm/iterative-deepening"}},d={},p=[{value:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",id:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",level:2},{value:"\u30aa\u30bb\u30ed",id:"\u30aa\u30bb\u30ed",level:3},{value:"\u305d\u308c\u305e\u308c\u306e\u8a00\u8a9e\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u9020",id:"\u305d\u308c\u305e\u308c\u306e\u8a00\u8a9e\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u9020",level:4},{value:"othell \u30d5\u30a1\u30a4\u30eb",id:"othell-\u30d5\u30a1\u30a4\u30eb",level:4},{value:"player \u30d5\u30a1\u30a4\u30eb",id:"player-\u30d5\u30a1\u30a4\u30eb",level:4},{value:"action \u30d5\u30a1\u30a4\u30eb",id:"action-\u30d5\u30a1\u30a4\u30eb",level:4},{value:"main \u30d5\u30a1\u30a4\u30eb",id:"main-\u30d5\u30a1\u30a4\u30eb",level:4}];function u(n){const e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",children:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"}),"\n",(0,i.jsx)(e.p,{children:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306f\u3001\u4e0e\u3048\u3089\u308c\u305f\u554f\u984c\u307e\u305f\u306f\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u304b\u3089\u76ee\u6a19\u3001\u89e3\u3001\u307e\u305f\u306f\u7279\u5b9a\u306e\u6761\u4ef6\u3092\u898b\u3064\u3051\u308b\u305f\u3081\u306e\u8a08\u7b97\u624b\u6cd5\u3067\u3042\u308b\u3002\n\u30b2\u30fc\u30e0\u306a\u3069\u306e\u5206\u91ce\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u30aa\u30bb\u30ed",children:"\u30aa\u30bb\u30ed"}),"\n",(0,i.jsx)(e.p,{children:"\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u5b9f\u88c5\u3057\u3066\u3069\u306e\u3088\u3046\u306b\u52dd\u7387\u304c\u5909\u5316\u3059\u308b\u306e\u304b\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306b\u30aa\u30bb\u30ed\u3092\u984c\u6750\u306b\u3057\u3066\u898b\u3066\u3044\u3053\u3046\u3068\u601d\u3046\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u305d\u306e\u305f\u3081\u3001\u5404\u8a00\u8a9e\u306e\u30aa\u30bb\u30ed\u3092\u884c\u3046\u30b3\u30fc\u30c9\u3092\u4ee5\u4e0b\u306b\u793a\u3059\u3002\u4eca\u5f8c\u306f Player \u30af\u30e9\u30b9\u306b\u3067\u65b0\u3057\u3044\u6226\u7565\u3092\u8ffd\u52a0\u3057\u3001\u4ed6\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3068\u5bfe\u6c7a\u3055\u305b\u3066\u3044\u304f\u3053\u3068\u3092\u8003\u3048\u308b\u3002\n\u53d6\u308c\u308b\u624b\u306e\u4e2d\u304b\u3089\u30e9\u30f3\u30c0\u30e0\u3067\u624b\u3092\u9078\u629e\u3059\u308b\u6226\u7565\u3092\u57fa\u6e96\u6226\u7565\u3068\u3057\u3066\u5b9f\u88c5\u3057\u3066\u3044\u308b\u3002"}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"\u3082\u3063\u3068\u3044\u3044\u5b9f\u88c5\u65b9\u6cd5\u3084\u304a\u304b\u3057\u306a\u70b9\u304c\u3042\u308c\u3070\u3001\u6559\u3048\u3066\u3044\u305f\u3060\u3051\u308c\u3070\u5e78\u3044\u3067\u3059\u3002"})}),"\n",(0,i.jsx)(e.h4,{id:"\u305d\u308c\u305e\u308c\u306e\u8a00\u8a9e\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u9020",children:"\u305d\u308c\u305e\u308c\u306e\u8a00\u8a9e\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u9020"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"actions"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u63a2\u7d22\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u8ffd\u52a0\u3057\u3066\u3044\u304f\u3002\u307e\u305f\u3001\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306b\u3088\u3063\u3066\u306f\u8a55\u4fa1\u95a2\u6570\u304c\u5b58\u5728\u3059\u308b\u3002\u8a55\u4fa1\u95a2\u6570\u306f\u540c\u69d8\u306e\u3082\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b",(0,i.jsx)(e.code,{children:"evaluation"}),"\u30d5\u30a1\u30a4\u30eb\u306b\u307e\u3068\u3081\u308b\u3002\n",(0,i.jsx)(e.code,{children:"evaluation"}),"\u30b3\u30fc\u30c9\u306f\u5fc5\u8981\u306b\u306a\u3063\u305f\u969b\u306b\u8a18\u8ff0\u3059\u308b\u3002"]}),"\n",(0,i.jsxs)(l.Z,{groupId:"code",children:[(0,i.jsx)(r.Z,{value:"python",label:"Python",default:!0,children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:".\n\u251c\u2500\u2500 __init__.py\n\u251c\u2500\u2500 lib\n\u2502   \u251c\u2500\u2500 actions\n\u2502   \u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u2502   \u251c\u2500\u2500 action.py\n\u2502   \u2502   \u2514\u2500\u2500 random_action.py\n\u2502   \u251c\u2500\u2500 evaluation.py\n\u2502   \u251c\u2500\u2500 othello.py\n\u2502   \u2514\u2500\u2500 player.py\n\u2514\u2500\u2500 main.py\n"})})}),(0,i.jsxs)(r.Z,{value:"C++",label:"C++",children:[(0,i.jsx)(e.p,{children:"\u30b3\u30f3\u30d1\u30a4\u30eb\u306e\u30b3\u30de\u30f3\u30c9\u306f\u4ee5\u4e0b\u3067\u3042\u308b\u3002"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"g++ main.cpp lib/othello.cpp lib/evaluation.cpp lib/action/action.cpp lib/action/random_action.cpp lib/player.cpp -o ./othello\n"})}),(0,i.jsx)(e.p,{children:"makefile \u3060\u3068\u4ee5\u4e0b\u306e\u69d8\u306a\u5f62\u5f0f"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-makefile",children:"# \u30b3\u30f3\u30d1\u30a4\u30e9\u3068\u30b3\u30f3\u30d1\u30a4\u30e9\u30aa\u30d7\u30b7\u30e7\u30f3\nCXX = g++\nCXXFLAGS =\n\nOUT_PATH = ./out\n\n# \u30bf\u30fc\u30b2\u30c3\u30c8: \u4f9d\u5b58\u30d5\u30a1\u30a4\u30eb\nothello: $(OUT_PATH)/main.o $(OUT_PATH)/othello.o $(OUT_PATH)/evaluation.o $(OUT_PATH)/action.o $(OUT_PATH)/random_action.o  $(OUT_PATH)/player.o\n\t$(CXX) $(CXXFLAGS) $^ -o othello\n\n# \u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\n$(OUT_PATH)/othello.o: lib/othello.cpp\n\t$(CXX) $(CXXFLAGS) -c $< -o $@\n\n$(OUT_PATH)/evaluation.o: lib/evaluation.cpp\n\t$(CXX) $(CXXFLAGS) -c $< -o $@\n\n$(OUT_PATH)/action.o: lib/action/action.cpp\n\t$(CXX) $(CXXFLAGS) -c $< -o $@\n\n$(OUT_PATH)/random_action.o: lib/action/random_action.cpp\n\t$(CXX) $(CXXFLAGS) -c $< -o $@\n\n$(OUT_PATH)/player.o: lib/player.cpp\n\t$(CXX) $(CXXFLAGS) -c $< -o $@\n\n$(OUT_PATH)/main.o: main.cpp $(OUT_PATH)\n\t$(CXX) $(CXXFLAGS) -c $< -o $@\n\n# OUT_PATH\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306b\u4f5c\u6210\u3059\u308b\n$(OUT_PATH):\n\tmkdir -p $(OUT_PATH)\n\n\n.PHONY: clean\n\nclean:\n\trm -f $(OUT_PATH)/*.o\n\nrun:\n\t./othello\n\ng++:\n\tg++ main.cpp lib/othello.cpp lib/evaluation.cpp lib/action/action.cpp lib/action/random_action.cpp lib/player.cpp -o ./othello\n"})}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:".\n\u251c\u2500\u2500 lib\n\u2502   \u251c\u2500\u2500 action\n\u2502   \u2502   \u251c\u2500\u2500 action.cpp\n\u2502   \u2502   \u251c\u2500\u2500 action.hpp\n\u2502   \u2502   \u251c\u2500\u2500 random_action.cpp\n\u2502   \u2502   \u2514\u2500\u2500 random_action.hpp\n\u2502   \u251c\u2500\u2500 evaluation.cpp\n\u2502   \u251c\u2500\u2500 evaluation.hpp\n\u2502   \u251c\u2500\u2500 othello.cpp\n\u2502   \u251c\u2500\u2500 othello.hpp\n\u2502   \u251c\u2500\u2500 player.cpp\n\u2502   \u2514\u2500\u2500 player.hpp\n\u251c\u2500\u2500 main.cpp\n\u2514\u2500\u2500 makefile\n"})})]})]}),"\n",(0,i.jsx)(e.h4,{id:"othell-\u30d5\u30a1\u30a4\u30eb",children:"othell \u30d5\u30a1\u30a4\u30eb"}),"\n",(0,i.jsxs)(l.Z,{groupId:"code",children:[(0,i.jsx)(r.Z,{value:"python",label:"Python",default:!0,children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:'title="othello.py"',children:'import time\n\nfrom lib.othello import Othello, GameState\nfrom lib.player import Player\n\n\ndef play_game(player1_strategy, player2_strategy):\n    # \u5bfe\u6226\u30de\u30c3\u30d7\u4f5c\u6210\n    othello = Othello()\n\n    # player\u3092\u4f5c\u6210\n    player1 = Player(1, othello, player1_strategy)\n    player2 = Player(0, othello, player2_strategy)\n\n    # print(othello)\n    while (not othello.is_done()):\n        # player1\u306e\u30a2\u30af\u30b7\u30e7\u30f3\n        player1.put()\n        # player2\u306e\u30a2\u30af\u30b7\u30e7\u30f3\n        player2.put()\n    return othello.get_winner()\n\n\nn = 100\nwhite = 0\nblack = 0\ndraw = 0\nstart = time.time()\nfor i in range(n):\n    win: GameState = play_game("random", "random")\n    print(f"{i}\u56de\u76ee: {win.value}")\n    if win == GameState.WHITE_WIN:\n        white += 1\n    elif win == GameState.BLACK_WIN:\n        black += 1\n    else:\n        draw += 1\n\nprint(f"\u767d\u306e\u52dd\u7387: {white/n}")\nprint(f"\u9ed2\u306e\u52dd\u7387: {black/n}")\nprint(f"\u5f15\u304d\u5206\u3051: {draw/n}")\nprint(f"\u5b9f\u884c\u6642\u9593: {time.time() - start}")\n\n'})})}),(0,i.jsxs)(r.Z,{value:"C++",label:"C++",children:[(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="othello.hpp"',children:'#ifndef OTHELLO_HPP\n#define OTHELLO_HPP\n\n#include <bits/stdc++.h>\n\n#include "othello.hpp"\n\nclass Othello\n{\npublic:\nstatic const int mapSize = 8;\ninline static const int directions[8][2] = {\n{-1, -1}, {-1, 0}, {-1, 1}, {0, -1}, {0, 1}, {1, -1}, {1, 0}, {1, 1}};\n\n    Othello();\n    bool isDone();\n    std::vector<std::pair<int, int>> legalActions(int player);\n    bool isValidAction(int player, int y, int x);\n    std::string getWinner();\n    void put(int player, std::pair<int, int> pos);\n    Othello copyBoard();\n    std::pair<int, int> getCount();\n    std::string toString();\n    std::vector<std::vector<int>> getBoard();\n    // \u30b3\u30d4\u30fc\u4ee3\u5165\u6f14\u7b97\u5b50\n    Othello &operator=(const Othello &other);\n\nprivate:\nstd::vector<std::vector<int>> board;\n};\n\n#endif // OTHELLO_HPP\n\n'})}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="othello.cpp"',children:'#include <bits/stdc++.h>\n#include "othello.hpp"\nusing namespace std;\nOthello::Othello()\n{\n    board = vector<vector<int>>(mapSize, vector<int>(mapSize, -1));\n    // 0\u304cwhite\n    // 1\u304cblack\u3068\u3059\u308b\n    int half = mapSize / 2;\n    board[half][half] = 0;\n    board[half - 1][half] = 1;\n    board[half][half - 1] = 1;\n    board[half - 1][half - 1] = 0;\n}\n\nbool Othello::isDone()\n{\n    for (int i = 0; i < mapSize; ++i)\n    {\n        for (int j = 0; j < mapSize; ++j)\n        {\n            if (board[i][j] == -1 && legalActions(0).size() + legalActions(1).size() != 0)\n            {\n                return false;\n            }\n        }\n    }\n    return true;\n}\n\nvector<pair<int, int>> Othello::legalActions(int player)\n{\n    vector<pair<int, int>> actions;\n    for (int i = 0; i < mapSize; ++i)\n    {\n        for (int j = 0; j < mapSize; ++j)\n        {\n            if (isValidAction(player, i, j))\n            {\n                actions.push_back({i, j});\n            }\n        }\n    }\n    return actions;\n}\n\nbool Othello::isValidAction(int player, int y, int x)\n{\n    // \u3059\u3067\u306b\u7f6e\u304b\u308c\u3066\u3044\u308b\n    if (board[y][x] >= 0)\n    {\n        return false;\n    }\n\n    for (int dir = 0; dir < 8; ++dir)\n    {\n        int dy = directions[dir][0];\n        int dx = directions[dir][1];\n        int ny = y + dy;\n        int nx = x + dx;\n        // \u76e4\u9762\u5916\n        if (!(ny >= 0 && ny < mapSize && nx >= 0 && nx < mapSize))\n        {\n            continue;\n        }\n        // \u96a3\u304c\u76f8\u624b\u306e\u30de\u30b9\u3067\u306a\u3044\n        if ((player ^ board[ny][nx]) != 1)\n        {\n            continue;\n        }\n        // \u5ef6\u9577\u7dda\u4e0a\u306b\u81ea\u5206\u306e\u30de\u30b9\u304c\u5b58\u5728\u3059\u308b\u304b\n        ny += dy;\n        nx += dx;\n        while (ny >= 0 && ny < mapSize && nx >= 0 && nx < mapSize)\n        {\n            // \u5ef6\u9577\u7dda\u4e0a\u306b\u81ea\u5206\u306e\u30de\u30b9\u304c\u5b58\u5728\u3059\u308b\n            if ((board[ny][nx] ^ player) == 0)\n            {\n                return true;\n            }\n            else if ((board[ny][nx] ^ player) == 1)\n            {\n                ny += dy;\n                nx += dx;\n                continue;\n            }\n            // \u81ea\u5206\u306e\u30de\u30b9\u304c\u767b\u5834\u3059\u308b\u524d\u306b\u4f55\u3082\u7f6e\u304b\u308c\u3066\u3044\u306a\u3044\u30de\u30b9\u304c\u767b\u5834\u3059\u308b\u304b\n            break;\n        }\n    }\n\n    return false;\n}\n\nstring Othello::getWinner()\n{\n    if (isDone())\n    {\n        int black = 0;\n        for (int i = 0; i < mapSize; ++i)\n        {\n            black += accumulate(board[i].begin(), board[i].end(), 0);\n        }\n        int white = mapSize * mapSize - black;\n        if (black < white)\n        {\n            return "White Win";\n        }\n        else if (black == white)\n        {\n            return "Draw";\n        }\n        return "Black Win";\n    }\n    else\n    {\n        return "In Progress";\n    }\n}\n\nvoid Othello::put(int player, pair<int, int> pos)\n{\n    board[pos.first][pos.second] = player;\n\n    for (int dir = 0; dir < 8; ++dir)\n    {\n        int dy = directions[dir][0];\n        int dx = directions[dir][1];\n        int ny = pos.first + dy;\n        int nx = pos.second + dx;\n        vector<pair<int, int>> turn_over;\n\n        while (ny >= 0 && ny < mapSize && nx >= 0 && nx < mapSize)\n        {\n            // \u3072\u3063\u304f\u308a\u8fd4\u3059\u3082\u306e\u3092\u5165\u308c\u308b\n            if ((player ^ board[ny][nx]) == 1)\n            {\n                turn_over.push_back(make_pair(ny, nx));\n                ny += dy;\n                nx += dx;\n                continue;\n            }\n            break;\n        }\n        // \u3072\u3063\u304f\u308a\u8fd4\u3059\u5bfe\u8c61\u306e\u6700\u5f8c\u304c\u81ea\u5206\u306e\u30de\u30b9\u3067\u3042\u308b\u304b\n        if (!((ny >= 0 && ny < mapSize && nx >= 0 && nx < mapSize) && board[ny][nx] == player))\n        {\n            continue;\n        }\n        // \u3072\u3063\u304f\u308a\u8fd4\u3059\n        for (const auto &move : turn_over)\n        {\n            board[move.first][move.second] = player;\n        }\n    }\n}\n\nOthello Othello::copyBoard()\n{\n    // \u73fe\u5728\u306e\u76e4\u9762\u3092\u30c7\u30a3\u30fc\u30d7\u30b3\u30d4\u30fc\u3057\u3066\u65b0\u3057\u3044\u76e4\u9762\u3092\u4f5c\u6210\n    Othello copy = *this;\n    return copy;\n}\n\npair<int, int> Othello::getCount()\n{\n    int white = 0;\n    int black = 0;\n    for (int i = 0; i < mapSize; ++i)\n    {\n        for (int j = 0; j < mapSize; ++j)\n        {\n            if (board[i][j] == 1)\n            {\n                black++;\n            }\n            else if (board[i][j] == 0)\n            {\n                white++;\n            }\n        }\n    }\n    return make_pair(white, black);\n}\n\nstring Othello::toString()\n{\n    stringstream os("");\n    os << "Player Information" << endl;\n\n    pair<int, int> mass = getCount();\n    int black = mass.second;\n    int white = mass.first;\n\n    os << "Black: " << black << endl;\n    os << "White: " << white << endl;\n\n    os << "----------------------------" << endl;\n    os << "Board Information" << endl;\n\n    auto addSidebar = []() -> string\n    {\n        stringstream bar("");\n        for (int i = 0; i < mapSize; ++i)\n        {\n            bar << " ";\n            bar << "\u30fc";\n        }\n        return bar.str();\n    };\n    os << addSidebar() << endl;\n    for (int i = 0; i < mapSize; ++i)\n    {\n        os << "|";\n        for (int j = 0; j < mapSize; ++j)\n        {\n            if (board[i][j] == 1)\n            {\n                os << "\u26ab\ufe0f";\n            }\n            else if (board[i][j] == 0)\n            {\n                os << "\u26aa\ufe0f";\n            }\n            else\n            {\n                os << "\u3000";\n            }\n            os << "|";\n        }\n        os << endl;\n        os << addSidebar() << endl;\n    }\n    return os.str();\n}\n\nvector<vector<int>> Othello::getBoard()\n{\n    return board;\n}\n\n// \u30b3\u30d4\u30fc\u4ee3\u5165\u6f14\u7b97\u5b50\nOthello &Othello::operator=(const Othello &other)\n{\n    if (this != &other)\n    { // \u81ea\u5df1\u4ee3\u5165\u3092\u30c1\u30a7\u30c3\u30af\n        // \u30e1\u30f3\u30d0\u5909\u6570\u3092\u30c7\u30a3\u30fc\u30d7\u30b3\u30d4\u30fc\u3059\u308b\n        this->board = other.board;\n    }\n    return *this;\n}\n\n'})})]})]}),"\n",(0,i.jsx)(e.h4,{id:"player-\u30d5\u30a1\u30a4\u30eb",children:"player \u30d5\u30a1\u30a4\u30eb"}),"\n",(0,i.jsxs)(l.Z,{groupId:"code",children:[(0,i.jsx)(r.Z,{value:"python",label:"Python",default:!0,children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:'title="player.py"',children:'from lib.othello import Othello\nfrom lib.actions import *\n\n\nclass Player():\n\n    def __init__(self, _id: int, board: Othello, strategy: str) -> None:\n        self.id = _id\n        self.othello = board\n        # \u6b21\u306e\u624b\u3092\u9078\u629e\u3059\u308b\u624b\u6cd5\u3092\u8fd4\u308b\n        match strategy:\n            case "random":\n                self.strategy = RandomAction(_id)\n            case _:\n                self.strategy = RandomAction(_id)\n\n    def put(self):\n        action = self.strategy.action(self.othello.copy_board())\n        # \u7f6e\u304f\u3068\u3053\u308d\u304c\u306a\u304b\u3063\u305f\u5834\u5408\n        if action is None:\n            return\n        self.othello.put(self.id, action)\n\n'})})}),(0,i.jsxs)(r.Z,{value:"C++",label:"C++",children:[(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="player.hpp"',children:'#ifndef PLAYER_H\n#define PLAYER_H\n#include <bits/stdc++.h>\n\n#include "othello.hpp"\n#include "evaluation.hpp"\n#include "action/action.hpp"\n#include "action/random_action.hpp"\n#include "action/mini_max_action.hpp"\nclass Player\n{\n\npublic:\n    Player(int _id, Othello &_othello, const Strategy strategy, int depth = 2, Evaluation evaluation = Evaluation::MASS_COUNT);\n\n    void put();\n\nprivate:\n    int id;\n    Othello &othello;\n    unique_ptr<Action> strategy = nullptr;\n    int (Player::*action)(const vector<pair<int, int>> &);\n};\n\n#endif // PLAYER_H\n\n'})}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="player.cpp"',children:'#include <bits/stdc++.h>\n\n#include "othello.hpp"\n#include "evaluation.hpp"\n#include "action/action.hpp"\n#include "action/random_action.hpp"\n#include "action/mini_max_action.hpp"\n#include "player.hpp"\nusing namespace std;\nPlayer::Player(int _id, Othello &_othello, const Strategy strategy) : id(_id), othello(_othello)\n{\n    id = _id;\n    switch (strategy)\n    {\n    case Strategy::RANDOM:\n        this->strategy = make_unique<RandomAction>(_id);\n        break;\n    default:\n        this->strategy = make_unique<RandomAction>(_id);\n        break;\n    }\n}\n\nvoid Player::put()\n{\n    optional<pair<int, int>> action = strategy->action(othello.copyBoard());\n    if (!action.has_value())\n    {\n        return;\n    }\n    othello.put(id, action.value());\n}\n\n'})})]})]}),"\n",(0,i.jsx)(e.h4,{id:"action-\u30d5\u30a1\u30a4\u30eb",children:"action \u30d5\u30a1\u30a4\u30eb"}),"\n",(0,i.jsxs)(l.Z,{groupId:"code",children:[(0,i.jsxs)(r.Z,{value:"python",label:"Python",default:!0,children:[(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"actions"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e",(0,i.jsx)(e.code,{children:"__init__.py"}),"\u306b\u306f\u5404 action \u3092 import \u3059\u308b\u3088\u3046\u306b\u8a18\u8ff0\u3057\u3066\u3044\u307e\u3059\u3002"]})}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:'title="action.py"',children:'import sys\nfrom pathlib import Path\nfrom abc import ABC, abstractmethod\n\nsys.path.append(str(Path(__file__).parent.parent.parent))\nfrom lib.othello import Othello\n\n\nclass Action(ABC):\n\n    def __init__(self, _id: int) -> None:\n        self.id = _id\n\n    @abstractmethod\n    def action(self, othello: Othello) -> tuple[int, int]:\n        raise NotImplementedError("")\n\n'})})]}),(0,i.jsxs)(r.Z,{value:"C++",label:"C++",children:[(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="action.hpp"',children:'#ifndef OTHELLO_STRATEGY_H\n#define OTHELLO_STRATEGY_H\n\n#include <bits/stdc++.h>\n\n#include "../othello.hpp"\n\nusing namespace std;\n\nenum class Strategy\n{\nRANDOM\n};\n\nclass Action\n{\n\npublic:\nAction(int value);\n// \u7d14\u7c8b\u4eee\u60f3\u95a2\u6570\u3092\u5ba3\u8a00\nvirtual optional<pair<int, int>> action(Othello othello) = 0;\n\nprotected:\nint id;\n};\n#endif // OTHELLO_STRATEGY_H\n\n'})}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="action.cpp"',children:'\n#include <bits/stdc++.h>\n\n#include "../othello.hpp"\n#include "action.hpp"\nusing namespace std;\n\nAction::Action(int value) : id(value)\n{\n}\n'})})]})]}),"\n",(0,i.jsx)(e.h4,{id:"main-\u30d5\u30a1\u30a4\u30eb",children:"main \u30d5\u30a1\u30a4\u30eb"}),"\n",(0,i.jsxs)(l.Z,{groupId:"code",children:[(0,i.jsx)(r.Z,{value:"python",label:"Python",default:!0,children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:'title="main.py"',children:'from lib.othello import Othello, GameState\nfrom lib.player import Player\n\n\ndef play_game(player1_strategy, player2_strategy):\n    # \u5bfe\u6226\u30de\u30c3\u30d7\u4f5c\u6210\n    othello = Othello()\n\n    # player\u3092\u4f5c\u6210\n    player1 = Player(1, othello, player1_strategy, 2, "custom")\n    player2 = Player(0, othello, player2_strategy, 2, "custom")\n\n    # print(othello)\n    while (not othello.is_done()):\n        # player1\u306e\u30a2\u30af\u30b7\u30e7\u30f3\n        player1.put()\n        # player2\u306e\u30a2\u30af\u30b7\u30e7\u30f3\n        player2.put()\n    return othello.get_winner()\n\n\nn = 100\nwhite = 0\nblack = 0\ndraw = 0\nfor i in range(n):\n    win: GameState = play_game("alpha_beta", "minimax")\n    print(f"{i}\u56de\u76ee: {win.value}")\n    if win == GameState.WHITE_WIN:\n        white += 1\n    elif win == GameState.BLACK_WIN:\n        black += 1\n    else:\n        draw += 1\n\nprint(f"\u767d\u306e\u52dd\u7387: {white/n}")\nprint(f"\u9ed2\u306e\u52dd\u7387: {black/n}")\nprint(f"\u5f15\u304d\u5206\u3051: {draw/n}")\n'})})}),(0,i.jsx)(r.Z,{value:"C++",label:"C++",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="main.cpp"',children:'#include <bits/stdc++.h>\n\n#include "lib/othello.hpp"\n#include "lib/evaluation.hpp"\n#include "lib/action/action.hpp"\n#include "lib/action/random_action.hpp"\n#include "lib/action/mini_max_action.hpp"\n#include "lib/player.hpp"\nusing namespace std;\n\nstring playGame(const Strategy player1_strategy, const Strategy player2_strategy)\n{\n    Othello othello;\n\n    Player player1(1, othello, player1_strategy, 2, Evaluation::CUSTOM);\n    Player player2(0, othello, player2_strategy);\n\n    while (!othello.isDone())\n    {\n        player1.put();\n        player2.put();\n    }\n    return othello.getWinner();\n}\n\nint main()\n{\n    int n = 100;\n    int white = 0;\n    int black = 0;\n    int draw = 0;\n    for (int i = 0; i < n; ++i)\n    {\n        string win = playGame(Strategy::MINIMAX, Strategy::RANDOM);\n        printf("%d: %s\\n", i, win.c_str());\n\n        if (win == "White Win")\n            white++;\n        else if (win == "Black Win")\n            black++;\n        else\n            draw++;\n    }\n    printf("\u767d\u306e\u52dd\u7387: %0.5f\\n", (double)white / n);\n    printf("\u9ed2\u306e\u52dd\u7387: %0.5f\\n", (double)black / n);\n    printf("\u5f15\u304d\u5206\u3051: %0.5f\\n", (double)draw / n);\n    return 0;\n}\n'})})})]})]})}function h(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},85162:(n,e,t)=>{t.d(e,{Z:()=>r});t(67294);var i=t(86010);const a={tabItem:"tabItem_Ymn6"};var l=t(85893);function r(n){let{children:e,hidden:t,className:r}=n;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,r),hidden:t,children:e})}},74866:(n,e,t)=>{t.d(e,{Z:()=>j});var i=t(67294),a=t(86010),l=t(12466),r=t(16550),o=t(20469),s=t(91980),c=t(67392),d=t(50012);function p(n){return i.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,i.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(n){const{values:e,children:t}=n;return(0,i.useMemo)((()=>{const n=e??function(n){return p(n).map((n=>{let{props:{value:e,label:t,attributes:i,default:a}}=n;return{value:e,label:t,attributes:i,default:a}}))}(t);return function(n){const e=(0,c.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function h(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function m(n){let{queryString:e=!1,groupId:t}=n;const a=(0,r.k6)(),l=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,s._X)(l),(0,i.useCallback)((n=>{if(!l)return;const e=new URLSearchParams(a.location.search);e.set(l,n),a.replace({...a.location,search:e.toString()})}),[l,a])]}function y(n){const{defaultValue:e,queryString:t=!1,groupId:a}=n,l=u(n),[r,s]=(0,i.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const i=t.find((n=>n.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:e,tabValues:l}))),[c,p]=m({queryString:t,groupId:a}),[y,f]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[a,l]=(0,d.Nk)(t);return[a,(0,i.useCallback)((n=>{t&&l.set(n)}),[t,l])]}({groupId:a}),b=(()=>{const n=c??y;return h({value:n,tabValues:l})?n:null})();(0,o.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:r,selectValue:(0,i.useCallback)((n=>{if(!h({value:n,tabValues:l}))throw new Error(`Can't select invalid tab value=${n}`);s(n),p(n),f(n)}),[p,f,l]),tabValues:l}}var f=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function _(n){let{className:e,block:t,selectedValue:i,selectValue:r,tabValues:o}=n;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=n=>{const e=n.currentTarget,t=s.indexOf(e),a=o[t].value;a!==i&&(c(e),r(a))},p=n=>{let e=null;switch(n.key){case"Enter":d(n);break;case"ArrowRight":{const t=s.indexOf(n.currentTarget)+1;e=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(n.currentTarget)-1;e=s[t]??s[s.length-1];break}}e?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e),children:o.map((n=>{let{value:e,label:t,attributes:l}=n;return(0,g.jsx)("li",{role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,ref:n=>s.push(n),onKeyDown:p,onClick:d,...l,className:(0,a.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===e}),children:t??e},e)}))})}function x(n){let{lazy:e,children:t,selectedValue:a}=n;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=l.find((n=>n.props.value===a));return n?(0,i.cloneElement)(n,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((n,e)=>(0,i.cloneElement)(n,{key:e,hidden:n.props.value!==a})))})}function v(n){const e=y(n);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(_,{...n,...e}),(0,g.jsx)(x,{...n,...e})]})}function j(n){const e=(0,f.Z)();return(0,g.jsx)(v,{...n,children:p(n.children)},String(e))}},97936:(n,e,t)=>{t.d(e,{Z:()=>a});t(67294);var i=t(85893);function a(n){let{children:e,color:t}=n;return(0,i.jsx)("span",{style:{color:t},children:e})}},11151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>r});var i=t(67294);const a={},l=i.createContext(a);function r(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);